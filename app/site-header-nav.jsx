"use client";

import { usePathname } from "next/navigation";
import { siteNavPages } from "./site-data";

function normalizePath(path) {
  if (!path) return "/Website";
  const cleanPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  return cleanPath || "/Website";
}

function isActiveRoute(pathname, href) {
  const currentPath = normalizePath(pathname);
  const targetPath = normalizePath(href);

  if (targetPath === "/Website") {
    return currentPath === "/Website";
  }

  if (targetPath === "/Website/notes") {
    return currentPath.startsWith("/Website/notes") || currentPath.startsWith("/Website/blog");
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="folder-panel" aria-label="Studio pages">
      {siteNavPages.map((page) => {
        const active = isActiveRoute(pathname, page.href);

        return (
          <a
            href={page.href}
            key={page.href}
            className={active ? "folder-panel__link folder-panel__link--active" : "folder-panel__link"}
            aria-current={active ? "page" : undefined}
          >
            <span>{page.title}</span>
          </a>
        );
      })}
    </nav>
  );
}
