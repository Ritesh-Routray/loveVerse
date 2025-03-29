"use client";
import "@fontsource/dancing-script";

export default function Learn() {
  return (
    <section id="learn" className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-16 px-6 flex items-center justify-center">
      <div className="max-w-5xl text-center">
        {/* Header */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-pink-600 drop-shadow-xl font-dancing">
          Love is an Art, Master It
        </h1>
        <p className="mt-6 text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
          Unlock the mysteries of love, connection, and lasting passion. Your
          journey to a deeper understanding of romance begins here.
        </p>

        {/* Sections */}
        <div className="mt-12 space-y-16">
          {/* The Science of Love */}
          <div className="bg-white shadow-lg rounded-3xl p-8 transition transform hover:scale-105">
            <h2 className="text-4xl font-dancing text-pink-500">
              The Science of Love
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Love is more than just an emotion—it's a symphony of the heart and
              mind. Dive into the psychology behind attraction, attachment, and
              chemistry. Discover how love evolves over time, shaping
              relationships in ways unseen.
            </p>
          </div>

          {/* Building Strong Relationships */}
          <div className="bg-white shadow-lg rounded-3xl p-8 transition transform hover:scale-105">
            <h2 className="text-4xl font-dancing text-pink-500">
              The Secret to Everlasting Love
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Love flourishes when nurtured. Learn the art of deep
              conversations, emotional intelligence, and the little gestures
              that keep the spark alive. Every relationship has a unique
              rhythm—find yours and dance to it.
            </p>
          </div>

          {/* Navigating Heartbreak */}
          <div className="bg-white shadow-lg rounded-3xl p-8 transition transform hover:scale-105">
            <h2 className="text-4xl font-dancing text-pink-500">
              Healing and Moving Forward
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Love is powerful, but so is heartbreak. Transform past pain into
              growth, understanding, and self-love. The past is a lesson, not a
              life sentence. The right love is waiting—prepare yourself to
              embrace it.
            </p>
          </div>

          {/* Romantic Expressions */}
          <div className="bg-white shadow-lg rounded-3xl p-8 transition transform hover:scale-105">
            <h2 className="text-4xl font-dancing text-pink-500">
              The Language of Romance
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Words fade, but emotions last. Express love through unique
              gestures, handwritten letters, spontaneous adventures, and
              heartfelt moments. Romance isn't about grand gestures; it's about
              meaningful ones.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16">
          <h2 className="text-5xl font-dancing text-pink-600">
            Love is a Journey, Keep Learning
          </h2>
          <p className="mt-4 text-xl text-gray-800">
            Let every experience be a chapter in your love story. Grow, evolve,
            and embrace the magic of connection.
          </p>
        </div>
      </div>
    </section>
  );
}
