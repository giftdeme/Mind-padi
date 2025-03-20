export const siteConfig = {
	name: "MindPadi",
	title: "MindPadi - Mental Health Support Chatbot",
	description: {
		short: "AI-powered mental health chatbot offering personalized support.",
		long: "MindPadi is an AI-powered mental health chatbot offering personalized support with insights from science-based mental health experts. Join our waitlist for early access.",
	},
	url: {
		www: "https://www.mindpadi.com",
		nonWww: "https://mindpadi.com",
	},
	keywords: [
		"mental health",
		"chatbot",
		"AI therapy",
		"mental wellness",
		"digital mental health",
		"psychological support",
		"mental health app",
	],
	creator: "@mindpadi",
	authors: [{ name: "MindPadi Team" }],
	theme: {
		background: "#ffffff",
		primary: "#ffffff",
	},
	images: {
		og: {
			url: "/assets/mindpadi_og.png",
			width: 1200,
			height: 630,
			alt: "MindPadi - Mental Health Support Chatbot",
		},
		icon: {
			sizes: ["192x192", "512x512"],
			type: "image/png",
			url: ["/assets/mindpadi_192x192.png", "/assets/mindpadi_512x512.png"],
		},
	},
	locale: "en_US",
	applicationCategory: "HealthApplication",
} as const;
