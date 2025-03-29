"use client";
import "@fontsource/dancing-script";

export default function Safety() {
  return (
    <section id="safety" className="relative min-h-screen bg-gradient-to-b from-pink-50 to-white py-20 px-6 flex flex-col items-center text-center">
      <div className="relative z-10 max-w-4xl">
        {/* Header */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-red-500 drop-shadow-xl font-dancing">
          Love Fearlessly, Stay Safe
        </h1>
        <p className="mt-6 text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
          Real love thrives in a safe space. Trust your instincts, set
          boundaries, and embrace love with confidence.
        </p>
      </div>

      {/* Safety Cards */}
      <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Online Safety */}
        <div className="bg-white shadow-lg p-8 rounded-3xl border border-pink-200">
          <h2 className="text-3xl font-dancing text-red-500">
            Digital Love, Real Protection
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Love is online, but safety is real. Never rush into trust—verify,
            communicate, and protect your heart.
          </p>
        </div>

        {/* Emotional Boundaries */}
        <div className="bg-white shadow-lg p-8 rounded-3xl border border-pink-200">
          <h2 className="text-3xl font-dancing text-red-500">
            Boundaries Define Respect
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Love flourishes with mutual respect. Whether online or offline,
            consent is non-negotiable.
          </p>
        </div>

        {/* Red Flags */}
        <div className="bg-white shadow-lg p-8 rounded-3xl border border-pink-200">
          <h2 className="text-3xl font-dancing text-red-500">
            Spot the Red Flags
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Love should empower, not control. If something feels off, it
            probably is.
          </p>
        </div>

        {/* Safe Breakups */}
        <div className="bg-white shadow-lg p-8 rounded-3xl border border-pink-200">
          <h2 className="text-3xl font-dancing text-red-500">
            Breakups Shouldn’t Break You
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Not every love lasts, but every ending is a new beginning. Heal,
            grow, and move forward.
          </p>
        </div>
      </div>

      {/* Closing Message */}
      <div className="relative z-10 mt-16 max-w-3xl">
        <h2 className="text-5xl font-dancing text-red-600">
          Love Safely, Love Confidently ❤️
        </h2>
        <p className="mt-4 text-xl text-gray-800">
          Your heart is priceless—protect it, nurture it, and never settle for
          less.
        </p>
      </div>
    </section>
  );
}
