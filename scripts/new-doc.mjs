#!/usr/bin/env node
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const [topic, ...titleParts] = process.argv.slice(2);
const title = titleParts.join(" ");

if (!topic || !title) {
	console.error("Uso: pnpm new:doc <topico> <Titulo da nota>");
	process.exit(1);
}

const slug = title
	.toLowerCase()
	.normalize("NFD")
	.replace(/[\u0300-\u036f]/g, "")
	.replace(/[^a-z0-9]+/g, "-")
	.replace(/(^-|-$)/g, "");

const dir = path.join("src", "content", "docs", topic);
const file = path.join(dir, `${slug}.md`);

if (existsSync(file)) {
	console.error(`Arquivo já existe: ${file}`);
	process.exit(1);
}

const orderBySlug = { installation: 1, "getting-started": 2 };
const order = orderBySlug[slug];
const frontmatter = order
	? `---\ntitle: ${title}\nsidebar:\n  order: ${order}\n---\n\n`
	: `---\ntitle: ${title}\n---\n\n`;

await mkdir(dir, { recursive: true });
await writeFile(file, frontmatter);
console.log(`Criado ${file}`);
