import { siteConfig } from "@/config/site";
import Script from "next/script";

const schema = {
	"@context": "https://schema.org",
	"@type": "WebApplication",
	name: siteConfig.name,
	applicationCategory: siteConfig.applicationCategory,
	description: siteConfig.description.long,
	offers: {
		"@type": "Offer",
		availability: "PreOrder",
		price: "0",
		priceCurrency: "USD",
	},
	operatingSystem: "All",
	url: siteConfig.url.www,
	sameAs: [siteConfig.url.nonWww],
};

export default function JsonLd() {
	return (
		<Script id="json-ld" type="application/ld+json" strategy="worker">
			{JSON.stringify(schema)}
		</Script>
	);
}
