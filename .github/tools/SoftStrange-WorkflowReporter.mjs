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

const ensureDir = (file) => fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
const size = (file) => fs.existsSync(file) ? fs.statSync(file).size : Infinity;
const run = (cmd, cmdArgs) => spawnSync(cmd, cmdArgs, { stdio: 'inherit' }).status === 0;

function writeEnv(file, values) {
  if (!file) return;
  fs.appendFileSync(file, Object.entries(values).map(([k, v]) => `${k}=${v || ''}`).join('\n') + '\n');
}

function choose(files) {
  const lower = (x) => x.toLowerCase();
  return files.find((f) => lower(f).includes('home') && lower(f).includes('laptop')) ||
    files.find((f) => lower(f).includes('home')) ||
    files[0];
}

function makePreview(input, output, maxMb) {
  ensureDir(output);
  const maxBytes = Number(maxMb || 20) * 1024 * 1024;
  const attempts = [
    ['960', '32'],
    ['720', '34'],
    ['540', '36'],
    ['360', '40']
  ];
  for (const [width, crf] of attempts) {
    const ok = run('ffmpeg', ['-y', '-i', input, '-vf', `fps=4,scale=min(${width}\\,iw):-2`, '-c:v', 'libx264', '-preset', 'veryfast', '-crf', crf, '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', output]);
    if (ok && size(output) <= maxBytes) return true;
  }
  return false;
}

const videosDir = get('videos', '.agent/visual-runs/latest');
const messageJson = get('message-json', path.join(os.tmpdir(), 'soft-strange-discord-message.json'));
const previewOut = get('preview-out', path.join(os.tmpdir(), 'soft-strange-visual-tour-preview.mp4'));
const githubEnv = get('github-env', process.env.GITHUB_ENV || '');
const maxMb = get('max-mb', '20');
const status = get('status', process.env.WORKFLOW_STATUS || 'unknown');
const name = get('name', process.env.GITHUB_WORKFLOW || 'Workflow');
const files = [...new Set([...walk(videosDir), ...walk('.agent/visual-runs/latest')])];
let hasPreview = false;
if (files.length) hasPreview = makePreview(choose(files), previewOut, maxMb);
const sha = (process.env.GITHUB_SHA || '').slice(0, 7) || 'unknown';
const branch = process.env.GITHUB_REF_NAME || process.env.GITHUB_REF || 'unknown';
const runUrl = `${process.env.GITHUB_SERVER_URL || 'https://github.com'}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`;
const emoji = status === 'success' ? '✅' : '❌';
const payload = {
  username: 'Soft Strange Workflow Log',
  content: `${emoji} **${name}** — ${status}`,
  embeds: [{
    title: `${name} run summary`,
    description: get('summary', 'Workflow completed.'),
    fields: [
      { name: 'Branch', value: branch, inline: true },
      { name: 'Commit', value: sha, inline: true },
      { name: 'Run', value: runUrl, inline: false },
      { name: 'Playable preview', value: hasPreview ? 'Attached MP4 preview' : 'No MP4 preview was produced', inline: false }
    ]
  }],
  allowed_mentions: { parse: [] }
};
ensureDir(messageJson);
fs.writeFileSync(messageJson, JSON.stringify(payload, null, 2));
writeEnv(githubEnv, {
  SOFTSTRANGE_DISCORD_MESSAGE_JSON: messageJson,
  SOFTSTRANGE_HAS_DISCORD_PREVIEW: hasPreview ? 'true' : 'false',
  SOFTSTRANGE_DISCORD_PREVIEW_PATH: hasPreview ? previewOut : ''
});
console.log(`Reporter preview=${hasPreview} files=${files.length}`);
