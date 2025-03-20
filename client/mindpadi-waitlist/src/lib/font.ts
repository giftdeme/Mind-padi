import localFont from "next/font/local";

export const sfUiText = localFont({
	src: [
		{
			path: "../../public/assets/fonts/sf-ui-text/light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/light_italic.ttf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/regular_italic.ttf",
			weight: "400",
			style: "italic",
		},

		{
			path: "../../public/assets/fonts/sf-ui-text/medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/medium_italic.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/semibold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/semibold_italic.ttf",
			weight: "600",
			style: "italic",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/bold_italic.ttf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/heavy.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/assets/fonts/sf-ui-text/heavy_italic.ttf",
			weight: "800",
			style: "italic",
		},
	],
	variable: "--font-sf-ui-text",
});
