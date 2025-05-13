import Lock from "@/svg/lock.svg";

export default function Privacy() {
    return (
        <section className="mb-12 px-4 md:mb-20">
            <div className="flex max-w-screen-sm flex-col items-center rounded-[48px] bg-[#F9F1ED] p-6 text-center shadow-sm md:mx-auto">
                <Lock />
                <h2 className="mt-4 font-semibold text-xl md:text-3xl">
                    Your privacy is our
                    <br />
                    <span className="text-[#A43B06] italic">100%</span> Priority
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-gray-600 text-sm md:max-w-md md:text-base">
                    Your conversations are protected with bank-level encryption,
                    never shared with third parties, and you can chat
                    anonymously. Your thoughts stay private, exactly as they
                    should be.
                </p>
            </div>
        </section>
    );
}
