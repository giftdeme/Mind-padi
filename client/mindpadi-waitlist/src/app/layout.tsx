import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { sfUiText } from "@/lib/font";

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description.long,
	keywords: [...siteConfig.keywords],
	authors: [...siteConfig.authors],
	metadataBase: new URL(siteConfig.url.www),
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description.long,
		url: siteConfig.url.www,
		siteName: siteConfig.name,
		images: [siteConfig.images.og],
		locale: siteConfig.locale,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description.long,
		images: [siteConfig.images.og.url],
		creator: siteConfig.creator,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: process.env.GOOGLE_SITE_VERIFICATION ?? "",
	},
	alternates: {
		canonical: siteConfig.url.www,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-title" content="MindPadi" />
			</head>
			<JsonLd />
			<body className={`${manrope.variable} ${sfUiText.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
