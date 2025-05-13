import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [tailwindcss()],

	base: "/",

	build: {
		rollupOptions: {
			input: {
				home: "/index.html",
				portfolios: "/pages/portfolio.html",
				services: "/pages/services.html",
				about: "/pages/about.html",
				contact: "/pages/contact.html",
			},
		},
	},
});
