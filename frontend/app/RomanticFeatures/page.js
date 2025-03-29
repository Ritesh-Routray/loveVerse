"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Background Animation Component
const BackgroundEffects = () => (
  <>
    {/* Floating Hearts */}
    <motion.div
      className="absolute inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-300 opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 2 + 1}rem`,
          }}
          animate={{ y: [0, -30, 0] }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </motion.div>
  </>
);

const RomanticFeatures = () => {
  const features = useMemo(
    () => [
      {
        title: "💌 AI Love Life Prediction",
        description:
          "Whisper your love story to the stars, and let AI unveil the path of your heart’s journey. Perfect for those seeking clarity in love.",
        link: "/RomanticFeatures/AIlovePrediction",
      },
      {
        title: "💖 Text-based Matchmaking",
        description:
          "Your words hold the key to your soulmate. Share your heart’s desires, and let AI craft the perfect romantic connection.",
        link: "/RomanticFeatures/matchMaking",
      },
      {
        title: "💃 Spontaneous Dating",
        description:
          "Love is an adventure! Dive into spontaneous dates and let the universe decide your next romantic spark.",
        link: "/spontaneous-dating",
      },
      {
        title: "📖 AI Love Story Generator",
        description:
          "Every love story is unique. Let AI weave your romantic dreams into an enchanting fairytale just for you.",
        link: "/RomanticFeatures/AIloveStoryGenerator",
      },
      {
        title: "⏳ Future Love Time Capsule",
        description:
          "Seal your love letters and memories in time. Open them in the future and relive your most cherished moments.",
        link: "/RomanticFeatures/futureLoveTimeCapsule",
      },
    ],
    []
  );

  return (
    <section className="relative py-24 bg-gradient-to-br from-rose-100 via-pink-200 to-red-100 overflow-hidden">
      <BackgroundEffects />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif font-extrabold bg-gradient-to-r from-rose-600 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            💘 Discover the Magic of Loveverse 💘
          </h2>
          <p className="text-lg text-gray-700 italic mt-4">
            "Every heartbeat is a whisper from the universe, guiding you to
            love’s embrace."
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-rose-300 transform transition-transform duration-300"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full p-2 shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>

              <h3 className="text-3xl font-cursive font-semibold text-red-700 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-800 leading-relaxed mb-4">
                {feature.description}
              </p>

              <Link
                href={feature.link}
                aria-label={`Explore ${feature.title}`}
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-white font-bold hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/50 animate-pulse"
              >
                💕 Active Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RomanticFeatures;
