import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteConfig.url.www,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
	];
}
