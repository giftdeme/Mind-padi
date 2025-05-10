import hero from "@/png/auth/hero.png";
import Image from "next/image";

export default function AuthHero() {
    return (
        <section className="ml-auto hidden min-h-screen w-1/2 items-center justify-center pt-5 md:flex">
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-lg">
                <Image
                    src={hero}
                    alt="Hero section graphic"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                />
            </div>
        </section>
    );
}
