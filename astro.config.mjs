// @ts-check

import { unified } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { remarkHighlightMark } from "remark-highlight-mark";
import blogDarkTheme from "./src/styles/blog-dark-theme.json" with { type: "json" };
import blogLightTheme from "./src/styles/blog-light-theme.json" with { type: "json" };

// https://astro.build/config
export default defineConfig({
	site: "https://vault.decoda.com.br",
	integrations: [
		starlight({
			title: "Vault",
			customCss: ["./src/styles/custom.css"],
			expressiveCode: {
				// Paleta de cores dos blocos de código igual à usada no blog
				// theodorusclarence.com (extraída das variáveis --shiki-* do site)
				themes: [blogDarkTheme, blogLightTheme],
				styleOverrides: {
					borderColor: "var(--sl-color-gray-4)",
					borderRadius: "0.5rem",
					frames: {
						shadowColor: "transparent",
					},
				},
			},
		}),
	],
	markdown: {
		processor: unified({
			remarkPlugins: [remarkHighlightMark],
			remarkRehype: {
				handlers: {
					highlight(state, node) {
						return {
							type: "element",
							tagName: "mark",
							properties: {},
							children: state.all(node),
						};
					},
				},
			},
		}),
	},
});
