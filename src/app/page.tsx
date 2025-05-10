import CTA from "@/components/cta";
import FAQs from "@/components/faqs";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how_it_works";
import NavBar from "@/components/navbar";
import Privacy from "@/components/privacy";
import Testimonial from "@/components/testimonial";

export default function Home() {
    return (
        <main className="pt-3 lg:pt-6">
            <NavBar />
            <Hero />
            <Privacy />
            <Features />
            <HowItWorks />
            <Testimonial />
            <FAQs />
            <CTA />
            <Footer />
        </main>
    );
}
