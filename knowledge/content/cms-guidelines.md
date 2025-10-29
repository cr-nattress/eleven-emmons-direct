Decision Guide (quick scan)

Choose Option 1 (next-mdx-remote) if:

You want Markdown/MDX as content files (in /content), with frontmatter and strong control over serialization via remark/rehype.

You want SSG/ISR for a blog/docs; content lives in Git.

You need per-page MDX rendering (e.g., read arbitrary .md/.mdx at build time or server-side) without making every page .mdx.

Choose Option 2 (native MDX pages/components) if:

You prefer to author pages themselves in MDX (i.e., page.mdx) and sprinkle components inline.

You want least moving parts and Next.js-native routing.

Your content ≈ your routes (docs, marketing pages), not a “blog engine”.

Skeptical sanity check: both are production-proven. Option 1 is more flexible for programmatic content collections; Option 2 is simpler for sites where “each page is a doc”.

Common Prereqs (for both)

Next.js (TypeScript): npx create-next-app@latest

Content folder (for Option 1): /content/\*\*

MDX plugins you’ll likely want:

remark-gfm — GitHub tables, strikethrough, task lists

rehype-slug + rehype-autolink-headings — anchors on headings

rehype-pretty-code — code highlighting (optional)

Option 1 — Static Markdown with next-mdx-remote
What & Why

What: Keep .md/.mdx files under /content, parse frontmatter with gray-matter, serialize with next-mdx-remote, and render via <MDXRemote/>.

Why: Great for blogs/docs where content is data. You can list, sort, paginate content, and decide SSG/ISR/SSR per route. You keep React pages in TSX, and the content in MD/MDX.

Install
npm i next-mdx-remote gray-matter remark remark-gfm rehype-slug rehype-autolink-headings

# optional but nice:

npm i rehype-pretty-code

Suggested structure
/content
posts/
hello-world.mdx
about.md
/lib
mdx.ts # serialization helpers (remark/rehype config)
/pages or /app # choose one router style (examples below)
/components
mdx-components.tsx # component mapping for MDX (links, code blocks, etc.)

## Example content file: /content/posts/hello-world.mdx

title: "Hello World"
date: "2025-10-20"
tags: ["intro", "nextjs"]

---

# {frontMatter.title}

This is **MDX**. Here’s a component:

<Callout>MDX can embed React components.</Callout>

MDX component map: /components/mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
return {
a: (props) => <Link href={String(props.href)}>{props.children}</Link>,
// Example custom shortcodes:
Callout: (props: React.PropsWithChildren<{ type?: "info"|"warn" }>) => (

<div className={`border-l-4 p-3 ${props.type === "warn" ? "border-yellow-500" : "border-blue-500"}`}>
{props.children}
</div>
),
...components,
};
}

Serialization helper: /lib/mdx.ts
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
// @ts-ignore - optional pretty code
import rehypePrettyCode from "rehype-pretty-code";

export async function compileMDX(source: string) {
return serialize(source, {
mdxOptions: {
remarkPlugins: [remarkGfm],
rehypePlugins: [
rehypeSlug,
[rehypeAutolinkHeadings, { behavior: "append" }],
[rehypePrettyCode, { theme: "github-dark" }],
],
format: "mdx",
},
parseFrontmatter: true,
});
}

Pages Router (simple to reason about)

List page: /pages/blog/index.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export async function getStaticProps() {
const files = fs.readdirSync(POSTS_DIR);
const posts = files.map((f) => {
const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf8");
const { data } = matter(raw);
return {
slug: f.replace(/\.mdx?$/, ""),
...data,
};
}).sort((a:any,b:any)=> new Date(b.date).getTime()-new Date(a.date).getTime());
return { props: { posts } };
}

export default function BlogIndex({ posts }: { posts: any[] }) {
return (

<main>
<h1>Blog</h1>
<ul>
{posts.map((p) => (
<li key={p.slug}>
<Link href={`/blog/${p.slug}`}>{p.title}</Link> — <small>{p.date}</small>
</li>
))}
</ul>
</main>
);
}

Post page: /pages/blog/[slug].tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { compileMDX } from "@/lib/mdx";
import { useMDXComponents } from "@/components/mdx-components";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export async function getStaticPaths() {
const files = fs.readdirSync(POSTS_DIR);
return {
paths: files.map((f) => ({ params: { slug: f.replace(/\.mdx?$/, "") } })),
fallback: false,
};
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
const filePath = path.join(POSTS_DIR, `${params.slug}.mdx`);
const fallbackPath = path.join(POSTS_DIR, `${params.slug}.md`);
const exists = fs.existsSync(filePath) ? filePath : fallbackPath;
const raw = fs.readFileSync(exists, "utf8");
const { content, data } = matter(raw);
const mdx = await compileMDX(content);
return { props: { mdx, frontMatter: data } };
}

export default function Post({
mdx,
frontMatter,
}: {
mdx: MDXRemoteSerializeResult;
frontMatter: Record<string, any>;
}) {
// hook provides the component map to MDX
const components = useMDXComponents({});

return (

<article>
<h1>{frontMatter.title}</h1>
<MDXRemote {...mdx} components={components} />
</article>
);
}

App Router (server components)

If you’re using /app:

Read files in Server Components.

Use MDXRemote in a Client wrapper (or use next-mdx-remote’s RSC flavor if you prefer). Pattern below keeps it clear.

Client wrapper: /components/mdx-remote-client.tsx

"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents } from "./mdx-components";

export default function MDXClient({ mdx }: { mdx: MDXRemoteSerializeResult }) {
const components = useMDXComponents({});
return <MDXRemote {...mdx} components={components} />;
}

Server page: /app/blog/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MDXClient from "@/components/mdx-remote-client";
import { compileMDX } from "@/lib/mdx";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export async function generateStaticParams() {
return fs.readdirSync(POSTS_DIR).map((f) => ({ slug: f.replace(/\.mdx?$/, "") }));
}

export default async function Page({ params }: { params: { slug: string } }) {
const p1 = path.join(POSTS_DIR, `${params.slug}.mdx`);
const p2 = path.join(POSTS_DIR, `${params.slug}.md`);
const file = fs.existsSync(p1) ? p1 : p2;
const raw = fs.readFileSync(file, "utf8");
const { content, data } = matter(raw);
const mdx = await compileMDX(content);

return (

<article>
<h1>{data.title}</h1>
<MDXClient mdx={mdx} />
</article>
);
}

SEO / ISR / Perf notes

ISR: Pages Router → revalidate in getStaticProps via return { revalidate: 60 }. App Router → export revalidate = 60.

Global TOC: Use rehype-slug + parse headings to build a sidebar.

Security: next-mdx-remote parses MDX safely, but never inject untrusted HTML; keep plugins vetted.

Option 2 — Native MDX pages/components
What & Why

What: Configure Next to treat .mdx as routable pages/components. Author content as page.mdx.

Why: Minimal config; perfect for docs/marketing or when “each page is a doc”. MDX interops cleanly with RSC.

Install + Configure
npm i @next/mdx remark-gfm rehype-slug rehype-autolink-headings

next.config.mjs

import createMDX from "@next/mdx";

const withMDX = createMDX({
extension: /\.mdx?$/,
options: {
remarkPlugins: [require("remark-gfm")],
rehypePlugins: [
require("rehype-slug"),
[require("rehype-autolink-headings"), { behavior: "append" }],
],
},
});

/\*_ @type {import('next').NextConfig} _/
const nextConfig = {
// App Router default; add pageExtensions so MDX is routable
pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);

Using MDX in /app (recommended)

Example: /app/docs/getting-started/page.mdx

export const metadata = {
title: "Getting Started",
description: "Install and run the project",
}

# Getting Started

Install the dependencies:

````bash
npm i


Use a component inline:

<Note type="info">This MDX page is a Server Component by default.</Note>


**MDX component injection** (for shortcodes/overrides):
- In App Router, you can use **MDX Provider** at the layout level.

`/app/mdx-components.tsx`
```tsx
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  a: (props) => <Link href={String(props.href)}>{props.children}</Link>,
  Note: (props: React.PropsWithChildren<{ type?: "info"|"warn" }>) => (
    <div className={`border-l-4 p-3 ${props.type === "warn" ? "border-yellow-500" : "border-blue-500"}`}>
      {props.children}
    </div>
  ),
};


/app/layout.tsx

import { mdxComponents } from "./mdx-components";
import { MDXProvider } from "@mdx-js/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </body>
    </html>
  );
}


If you prefer not to use MDXProvider, you can import components directly in each .mdx file (explicit but verbose).

Using MDX in Pages Router

You can also add MDX pages under /pages/**.mdx. The pageExtensions config above makes them routable.

Example: /pages/policies/privacy.mdx

---
title: "Privacy Policy"
---

# Privacy Policy

We store minimal data. Be nice. Hydrate.


In the Pages Router, to use frontmatter, add a small loader step or parse within a wrapper. Simpler approach: keep metadata in the MDX (export const meta = …) and read it in the page if needed.

Cross-cutting Concerns (both options)
Frontmatter typing (Option 1 heavy users)

Create a schema to validate content:

// /lib/schemas.ts
export type PostFM = {
  title: string;
  date: string;  // ISO
  tags?: string[];
  draft?: boolean;
};


Validate with zod if you want guardrails.

Code highlighting

If you used rehype-pretty-code, add minimal CSS (global or module) to style code blocks. Avoid client-side highlighters for perf.

Images

Prefer Next’s <Image> inside MDX (map img to a wrapper that proxies to <Image> and passes alt, width, height or uses fill with container styles).

// in mdx-components.tsx
import Image from "next/image";
export function useMDXComponents(components) {
  return {
    img: (props:any) => (
      <Image
        src={props.src}
        alt={props.alt ?? ""}
        width={props.width ?? 1200}
        height={props.height ?? 700}
      />
    ),
    ...components
  };
}

Search / TOC

Build a TOC by scanning headings during serialization (Option 1) or at runtime in a component (Option 2).

For site search, index the MDX output or parse .md/.mdx at build and generate a JSON index.

SSG/SSR/ISR

Blogs/docs: SSG + ISR (revalidate every N seconds) gives speed with freshness.

Live-edited content (from Git): Use ISR with a webhook to revalidate on push.

Tests (yes, your future self will thank you)

Unit test lib/mdx.ts to ensure plugins run and frontmatter parses.

Snapshot test a sample MDX render to catch plugin regressions.

“Why not both?” Pattern

You can combine them:

Use Option 2 for static site pages (marketing/docs).

Use Option 1 for collections (blog posts, changelogs) where you need to enumerate files, sort by date, and render a template.

This avoids forcing every page to be file-system content while keeping a smooth authoring story.

Quick Start Scripts (drop in)

Add scripts to package.json:

{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "content:check": "ts-node ./scripts/validate-frontmatter.ts"
  }
}


/scripts/validate-frontmatter.ts (optional guard):

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content", "posts");
const files = fs.readdirSync(dir).filter(f=>/\.mdx?$/.test(f));
let ok = true;

for (const f of files) {
  const raw = fs.readFileSync(path.join(dir,f),"utf8");
  const { data } = matter(raw);
  if (!data.title || !data.date) {
    console.error(`Missing title/date in ${f}`);
    ok = false;
  }
}

process.exit(ok ? 0 : 1);

Agent Checklist (copy for your coding agent)

Pick option

Need content as a collection + frontmatter + listing? → Option 1.

Want simple MDX pages as routes? → Option 2.

Install deps (see above).

Configure

Option 1: add /lib/mdx.ts, /components/mdx-components.tsx, and pages (/pages/blog/* or /app/blog/*).

Option 2: set up next.config.mjs with @next/mdx, pageExtensions, and (optionally) MDXProvider.

Create content

Option 1: /content/posts/*.mdx with frontmatter.

Option 2: *.mdx pages under /app or /pages.

Enhancements

Add rehype-slug + autolink-headings.

Add rehype-pretty-code if code heavy.

Map img → <Image>.

Build & validate

Add content:check script if using frontmatter.

Configure ISR if needed.

Future-proofing thought: if the content library grows large or you want type-safe querying, consider layering Contentlayer later. It plays nicely with both patterns.
````
