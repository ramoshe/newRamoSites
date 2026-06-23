import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Roboto Mono",
			cssVariable: "--font-base",
		},
		{
			provider: fontProviders.google(),
			name: "Coiny",
			cssVariable: "--font-fancy",
		},
		{
			provider: fontProviders.google(),
			name: "Shadows Into Light Two",
			cssVariable: "--font-note",
		},
	],

	integrations: [icon()],
});
