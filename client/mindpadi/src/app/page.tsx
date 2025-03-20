import Header from "@/components/header"
import HeroSection from "@/components/hero"
import FeaturesSection from "@/components/support"
import WellBeingChat from "@/components/wellbeing"
import Guidance from "@/components/guidance"
import SafeSpace from "@/components/safespace"
import PricingPlans from "@/components/pricing"
import Choose from "@/components/choose"
import Client from "@/components/client"
import Footer from "@/components/footer"
export default function Home () {
	return (
<div>
<Header />
<HeroSection />
<FeaturesSection />
<WellBeingChat/>
<Guidance/>
<SafeSpace/>
<PricingPlans/>
<Choose/>
<Client/>
<Footer/>
</div>
	)
}








/*
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
	*/
