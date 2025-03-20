import Image from "next/image";
import supportImage from "../assets/African woman pressing phone.png"; // Replace with actual path

import checkIcon from "../assets/checkbox.png"; // Replace with actual path
import brand from "./brand";

export default function FeaturesSection() {
  return (
    <section className="flex flex-col md:flex-column items-center justify-between px-6 md:px-16 py-12 max-w-screen-2xl mx-auto">
      {/* Left Side: Supporters & Image */}
       <div className="w-full flex justify-center">
        <h3 className="text-gray-700 font-semibold text-lg">We Are <br /> Supported By</h3>
       
        <ul className="flex flex-wrap gap-6 mt-4" >
      {brand.map((brand) =>
        <li key={brand.id}>
          <Image src={brand.image} alt="Mental Health" width={100} height={40} />
          </li>
      )}
    </ul>
    </div>
    <div className="flex items-center mt-8">
    <div className="md:w-1/2 ">
        {/* Supported By Section */}
       
        {/* Supporter Image */}
        <div className="mt-6 relative">
          <Image
            src={supportImage}
            alt="Woman using phone"
            width={400}
            height={400}
            className="rounded-lg"
          />
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-purple-100 rounded-full opacity-20"></div>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900">
          Trusted Support At Your Fingertips
        </h2>
        <p className="text-gray-600 mt-4">
          Backed by science & empathy, MindPadi offers expert-backed strategies 
          to help you feel better, one conversation at a time.
        </p>

        {/* Feature List */}
        <div className="mt-6 space-y-6">
          <div className="flex items-start gap-3">
            <Image src={checkIcon} alt="Check Icon" width={24} height={24} />
            <div>
              <h4 className="text-lg font-semibold">Empathetic & Accessible</h4>
              <p className="text-gray-600 text-sm">
                MindPadi is here to listen, support, and guide you.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Image src={checkIcon} alt="Check Icon" width={24} height={24} />
            <div>
              <h4 className="text-lg font-semibold">Judgment-Free Conversations</h4>
              <p className="text-gray-600 text-sm">
                A confidential space where your thoughts are heard and understood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </section>
  );
}