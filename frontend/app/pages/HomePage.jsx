"use client";
import FloatingHearts from "@/app/components/FloatingHearts";
import "@fontsource/dancing-script";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div id="home" className="min-h-screen w-full flex flex-col items-center justify-center text-center relative px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="pointer-events-none">
        <FloatingHearts />
      </div>

      <h1 className="text-6xl md:text-8xl font-extrabold text-pink-600 drop-shadow-xl font-dancing leading-snug">
        Welcome to LoveVerse
      </h1>

      <p className="font-dancing mt-4 text-2xl md:text-3xl text-gray-800 max-w-xl tracking-wide">
        The Ultimate Relationship & Love Platform, where connections blossom!
      </p>

      <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <button
          className="px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-600 transition-all focus:ring-4 focus:ring-pink-300 active:scale-95"
          onClick={() => router.push("/RomanticFeatures")}
        >
          Get Started
        </button>

        <button className="px-6 py-3 bg-white text-pink-500 border border-pink-500 text-lg font-semibold rounded-full shadow-lg hover:bg-pink-100 transition-all focus:ring-4 focus:ring-pink-200 active:scale-95">
          Learn More
        </button>
      </div>
    </div>
  );
}
