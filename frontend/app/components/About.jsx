"use client";
import "@fontsource/dancing-script";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 drop-shadow-xl font-dancing">
            About LoveVerse
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            LoveVerse is a sanctuary where passion meets innovation—a platform
            crafted to celebrate and nurture every love story.
          </p>
        </header>

        {/* Our Vision Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/romantic1.jpg"
              alt="Romantic scenery"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="text-lg text-gray-800 space-y-4">
            <h2 className="text-3xl font-bold text-pink-600 font-dancing">
              Our Vision
            </h2>
            <p>
              We believe that love is the most transformative force in the
              world. At LoveVerse, our vision is to create an immersive
              experience where every connection is celebrated and every story
              matters.
            </p>
            <p>
              Through innovative design and a deep passion for romance, we offer
              a space that not only connects hearts but also inspires them to
              grow and flourish.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-lg text-gray-800 space-y-4">
            <h2 className="text-3xl font-bold text-pink-600 font-dancing">
              Our Story
            </h2>
            <p>
              LoveVerse was born from a simple idea: to merge the timeless
              beauty of romance with the cutting-edge of digital connection. Our
              founders dreamed of a place where individuals could experience
              love in its purest form.
            </p>
            <p>
              With every feature designed and every interaction crafted, we
              invite you to be part of a journey that transforms everyday
              moments into unforgettable experiences.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/romantic2.jpg"
              alt="Elegant couple"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Community and Invitation */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Join our vibrant community of romantics and dreamers. Whether you're
            looking for heartfelt advice, meaningful connections, or simply a
            place to celebrate the art of love, LoveVerse welcomes you with open
            arms. Experience the magic where every heartbeat matters.
          </p>
          <button
            className="mt-8 px-8 py-4 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-600 transition-all focus:ring-4 focus:ring-pink-300 active:scale-95"
            onClick={() => (window.location.href = "/signup")}
          >
            Join Our Journey
          </button>
        </div>
      </div>
    </section>
  );
}
