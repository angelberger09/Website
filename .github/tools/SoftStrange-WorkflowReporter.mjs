#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const get = (name, fallback = '') => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const flag = (name) => args.includes(`--${name}`);
const run = (cmd, cmdArgs) => spawnSync(cmd, cmdArgs, { stdio: 'inherit' }).status === 0;
const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });
const walk = (dir) => {
  if (!dir || !fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    if (entry.isFile() && entry.name.toLowerCase().endsWith('.mp4')) out.push(full);
  }
  return out.sort();
};
const slug = (value) => String(value || 'item').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'item';
const size = (file) => fs.existsSync(file) ? fs.statSync(file).size : Infinity;

async function runAuditFallback() {
  const baseUrl = get('base-url');
  const outDir = get('out', '.agent/visual-runs/latest');
  const fps = Number(get('fps', '4')) || 4;
  const routes = get('routes', 'home=/,about=/about/,notes=/notes/,portfolio=/portfolio/,store=/store/').split(',').filter(Boolean).map((x) => {
    const [name, route = '/'] = x.split('=');
    return { name: slug(name), path: route.startsWith('/') ? route : `/${route}` };
  });
  const viewports = get('viewports', 'laptop:1280x720').split(',').filter(Boolean).map((x) => {
    const [name, dims] = x.split(':');
    const [width, height] = dims.split('x').map(Number);
    return { name: slug(name), width, height };
  });
  if (!baseUrl || flag('help')) {
    console.log('SoftStrange local fallback supports reporter mode and audit mode.');
    return;
  }
  ensureDir(path.join(outDir, 'videos'));
  const { chromium } = await import('playwright');
  const browser = await chromium.launch({ headless: true });
  const artifacts = [];
  try {
    for (const viewport of viewports) {
      for (const route of routes) {
        const label = `${route.name}-${viewport.name}-scroll`;
        const frames = path.join(outDir, 'frames', label);
        const video = path.join(outDir, 'videos', `${label}.mp4`);
        fs.rmSync(frames, { recursive: true, force: true });
        ensureDir(frames);
        const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: 'reduce' });
        const page = await context.newPage();
        const url = `${baseUrl.replace(/\/+$/, '')}${route.path}`;
        let frame = 0;
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
        try { await page.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
        await page.waitForTimeout(250);
        if (route.name === 'home' && viewport.name === 'laptop') await page.screenshot({ path: path.join(outDir, 'poster-home-laptop.png'), fullPage: false });
        const snap = async () => { await page.screenshot({ path: path.join(frames, `frame-${String(frame).padStart(5, '0')}.png`), fullPage: false }); frame += 1; };
        for (let i = 0; i < 4; i++) await snap();
        const max = await page.evaluate(() => Math.max(0, document.documentElement.scrollHeight - document.documentElement.clientHeight));
        const steps = Math.max(1, Math.ceil(max / 160));
        for (let i = 1; i <= steps; i++) {
          await page.evaluate((y) => window.scrollTo(0, y), Math.round(max * i / steps));
          await page.waitForTimeout(200);
          await snap();
        }
        for (let i = 0; i < 4; i++) await snap();
        run('ffmpeg', ['-y', '-framerate', String(fps), '-i', path.join(frames, 'frame-%05d.png'), '-vf', 'pad=ceil(iw/2)*2:ceil(ih/2)*2', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '23', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', video]);
        if (!flag('keep-frames')) fs.rmSync(frames, { recursive: true, force: true });
        await context.close();
        artifacts.push({ type: 'scroll', route: route.name, routePath: route.path, viewport: viewport.name, width: viewport.width, height: viewport.height, fps, frames: frame, video: path.relative(process.cwd(), video).replaceAll(path.sep, '/'), url });
      }
    }
  } finally {
    await browser.close();
  }
  const manifest = { tool: 'SoftStrange-local-audit-fallback', version: '0.1.0', generatedAt: new Date().toISOString(), baseUrl, fps, routes, viewports, commit: { sha: process.env.GITHUB_SHA || null, ref: process.env.GITHUB_REF || null, repository: process.env.GITHUB_REPOSITORY || null, runId: process.env.GITHUB_RUN_ID || null }, artifacts };
  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(outDir, 'README.md'), '# Soft Strange Website Visual Audit\n');
}

function makePreview(input, output, maxMb) {
  ensureDir(path.dirname(path.resolve(output)));
  const maxBytes = Number(maxMb || 20) * 1024 * 1024;
  const attempts = [['960', '32'], ['720', '34'], ['540', '36'], ['360', '40']];
  for (const [width, crf] of attempts) {
    const ok = run('ffmpeg', ['-y', '-i', input, '-vf', `fps=4,scale=min(${width}\\,iw):-2`, '-c:v', 'libx264', '-preset', 'veryfast', '-crf', crf, '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', output]);
    if (ok && size(output) <= maxBytes) return true;
  }
  return false;
}

function runReporter() {
  const videosDir = get('videos', '.agent/visual-runs/latest');
  const messageJson = get('message-json', path.join(os.tmpdir(), 'soft-strange-discord-message.json'));
  const previewOut = get('preview-out', path.join(os.tmpdir(), 'soft-strange-visual-tour-preview.mp4'));
  const githubEnv = get('github-env', process.env.GITHUB_ENV || '');
  const maxMb = get('max-mb', '20');
  const status = get('status', process.env.WORKFLOW_STATUS || 'unknown');
  const name = get('name', process.env.GITHUB_WORKFLOW || 'Workflow');
  const files = [...new Set([...walk(videosDir), ...walk('.agent/visual-runs/latest')])];
  const chosen = files.find((f) => f.toLowerCase().includes('home') && f.toLowerCase().includes('laptop')) || files[0];
  const hasPreview = chosen ? makePreview(chosen, previewOut, maxMb) : false;
  const sha = (process.env.GITHUB_SHA || '').slice(0, 7) || 'unknown';
  const branch = process.env.GITHUB_REF_NAME || process.env.GITHUB_REF || 'unknown';
  const runUrl = `${process.env.GITHUB_SERVER_URL || 'https://github.com'}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`;
  const emoji = status === 'success' ? '✅' : '❌';
  const payload = { username: 'Soft Strange Workflow Log', content: `${emoji} **${name}** — ${status}`, embeds: [{ title: `${name} run summary`, description: get('summary', 'Workflow completed.'), fields: [{ name: 'Branch', value: branch, inline: true }, { name: 'Commit', value: sha, inline: true }, { name: 'Run', value: runUrl, inline: false }, { name: 'Playable preview', value: hasPreview ? 'Attached MP4 preview' : 'No MP4 preview was produced', inline: false }] }], allowed_mentions: { parse: [] } };
  ensureDir(path.dirname(path.resolve(messageJson)));
  fs.writeFileSync(messageJson, JSON.stringify(payload, null, 2));
  if (githubEnv) fs.appendFileSync(githubEnv, `SOFTSTRANGE_DISCORD_MESSAGE_JSON=${messageJson}\nSOFTSTRANGE_HAS_DISCORD_PREVIEW=${hasPreview ? 'true' : 'false'}\nSOFTSTRANGE_DISCORD_PREVIEW_PATH=${hasPreview ? previewOut : ''}\n`);
  console.log(`Reporter preview=${hasPreview} files=${files.length}`);
}

if (args.includes('--base-url')) runAuditFallback().catch((error) => { console.error(error); process.exit(1); });
else runReporter();
