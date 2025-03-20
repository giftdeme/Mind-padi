export default function Client() {
  return (
    <section className="bg-blue-600 text-white text-center py-16 px-6 relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 bg-green-400 rounded-tr-xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-green-400 rounded-bl-xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          200+ Satisfied Clients
        </h2>
        <p className="text-base sm:text-lg mt-2">Try it now!</p>
        <p className="text-white/80 mt-2 text-sm sm:text-base">
          Try it risk-free — we don’t charge cancellation fees.
        </p>

        {/* CTA Button */}
        <button className="mt-6 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
          START CHAT NOW
        </button>
      </div>
    </section>
  );
}
