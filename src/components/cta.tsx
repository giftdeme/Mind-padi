import { Button } from "./button";

export default function CTA() {
    return (
        <section className="relative">
            <div className="-z-10 absolute inset-0 hidden bg-[url(/png/cta/overlay.png)] bg-center bg-cover bg-no-repeat md:block" />
            <div className="-z-10 absolute inset-0 bg-[url(/png/cta/overlay_small.png)] bg-center bg-cover bg-no-repeat md:hidden" />

            <div className="flex flex-col items-center justify-center px-4 py-16 md:py-24">
                <h2 className="mb-8 text-center font-medium text-2xl leading-snug sm:text-3xl lg:text-4xl">
                    Get Help From Our Empathetic <br /> AI Chatbot
                </h2>

                <Button className="rounded-3xl" aria-label="Start Chat">
                    Start Chat For Free &rarr;
                </Button>
            </div>
        </section>
    );
}
