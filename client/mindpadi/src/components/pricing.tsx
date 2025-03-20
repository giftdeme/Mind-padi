export default function PricingPlans() {
  return (
    <section className="py-12 px-6 sm:px-12 md:px-16 max-w-screen-xl mx-auto text-center">
      {/* Section Title */}
      <p className="text-indigo-500 font-semibold text-sm uppercase">
        Pricing
      </p>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
        Pick Your Plan Or Create
      </h2>

      {/* Pricing Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Pricing Options */}
        {[
          {
            name: "Regular",
            description: "Take the First Step Toward Better Mental Health",
            price: "$3.00",
            features: [
              "Chat with MindPadi",
              "Daily Check-ins",
              "Resource Library",
              "Personalized Insights",
              "Weekly Progress Reports",
              "Priority Support",
            ],
            buttonColor: "bg-indigo-600 hover:bg-indigo-700",
            textColor: "text-gray-800",
            borderColor: "border-gray-300",
            bgColor: "bg-white",
          },
          {
            name: "Standard",
            description: "Deepen Your Mental Health Journey",
            price: "$6.00",
            features: [
              "All Basic Features",
              "Personalized Insights",
              "Weekly Progress Reports",
              "Priority Support",
            ],
            buttonColor: "bg-green-500 hover:bg-green-600",
            textColor: "text-white",
            borderColor: "border-indigo-600",
            bgColor: "bg-indigo-600 text-white",
          },
          {
            name: "Professional",
            description: "Elevate Your Mental Well-Being with Expert Support",
            price: "$10.00",
            features: [
              "All Plus Features",
              "Live Therapist Sessions",
              "Crisis Support",
              "Customizable Goals",
            ],
            buttonColor: "bg-indigo-600 hover:bg-indigo-700",
            textColor: "text-gray-800",
            borderColor: "border-gray-300",
            bgColor: "bg-white",
          },
        ].map((plan, index) => (
          <div
            key={index}
            className={`border ${plan.borderColor} ${plan.bgColor} rounded-xl p-6 shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105`}
          >
            <h3 className={`text-2xl font-semibold ${plan.textColor}`}>
              {plan.name}
            </h3>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              {plan.description}
            </p>
            <p className={`text-3xl font-bold mt-4 ${plan.textColor}`}>
              {plan.price}
            </p>
            <p className="text-gray-500 text-sm">Per month, billed yearly</p>
            <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full ${plan.buttonColor} text-white font-semibold py-3 px-6 rounded-lg transition`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
