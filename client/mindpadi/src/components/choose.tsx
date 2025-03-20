import Image from "next/image";
import Chatbot from "../assets/chatbot-support.png";
import Confidential from "../assets/confidence-secure.png";
import Personalized from "../assets/personalised-support.png";

export default function Choose() {
  return (
    <section className="py-12 px-6 sm:px-12 md:px-16 max-w-screen-xl mx-auto text-center">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Why Choose MindPadi?
      </h2>
      <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        Find the desired comfort you need for a healthy mind, one chat at a time.
      </p>

      {/* Features Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { img: Chatbot, title: "24/7 Support", desc: "Always here when you need us." },
          { img: Confidential, title: "Confidential & Secure", desc: "Your privacy is our priority." },
          { img: Personalized, title: "Personalized Care", desc: "Tailored to your unique mental health needs." }
        ].map((feature, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
          >
            <div className="w-32 sm:w-40 md:w-48">
              <Image
                src={feature.img}
                alt={feature.title}
                width={192}
                height={192}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-500 mt-2 text-sm md:text-base">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
