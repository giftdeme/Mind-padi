import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Toaster } from "react-hot-toast";

export default function Home() {
	return (
		<>
			<Toaster />
			<div className="flex flex-col min-h-dvh scroll-smooth">
				<main className="flex-1">
					<Header />
					<Hero />
				</main>
				<Footer />
			</div>
		</>
	);
}
