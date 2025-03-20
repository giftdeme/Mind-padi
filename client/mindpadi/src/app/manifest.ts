import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: siteConfig.title,
		short_name: siteConfig.name,
		description: siteConfig.description.short,
		start_url: "/",
		display: "standalone",
		background_color: siteConfig.theme.background,
		theme_color: siteConfig.theme.primary,
		icons: [
			{
				src: siteConfig.images.icon.url[0],
				sizes: siteConfig.images.icon.sizes[0],
				type: siteConfig.images.icon.type,
				purpose: "maskable",
			},
			{
				src: siteConfig.images.icon.url[1],
				sizes: siteConfig.images.icon.sizes[1],
				type: siteConfig.images.icon.type,
				purpose: "maskable",
			},
		],
	};
}
