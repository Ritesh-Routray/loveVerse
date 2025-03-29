"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoveStoryGenerator() {
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEffects, setShowEffects] = useState(false);
  const [name, setName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [meetingPlace, setMeetingPlace] = useState("");
  const [loveStoryDetails, setLoveStoryDetails] = useState("");
  const [genre, setGenre] = useState("Romantic Fairytale");
  const [obstacles, setObstacles] = useState("");
  const [specialMoments, setSpecialMoments] = useState("");
  const [emotions, setEmotions] = useState("");

  const genres = [
    "Romantic Fairytale",
    "Destined Love",
    "Love at First Sight",
    "Second Chances",
    "Tragic Romance",
    "Soulmates Reunited",
    "Secret Admirer",
    "Royal Romance",
    "Time-Travel Love",
    "Childhood Sweethearts",
    "Enemies to Lovers",
    "Long Distance Love",
    "Forbidden Love",
  ];

  const getLoveStory = async () => {
    if (
      !name ||
      !partnerName ||
      !meetingPlace ||
      !loveStoryDetails ||
      !specialMoments ||
      !obstacles ||
      !emotions
    ) {
      return alert("Please fill all fields!");
    }

    setLoading(true);
    setStory("");
    setShowEffects(true);

    const prompt = `
      Create a deeply emotional and heart-touching love story about ${name} and ${partnerName}.
      - They first met at ${meetingPlace}.
      - Their love story includes: "${loveStoryDetails}".
      - The main obstacles they faced: "${obstacles}".
      - Their most memorable special moments together: "${specialMoments}".
      - The emotions and feelings they experienced: "${emotions}".
      - The genre is '${genre}', so the story should be written in a style that fits this theme.
      - Make the story cinematic, full of emotions, and deeply poetic, with vivid descriptions of their love journey, struggles, and ultimate fate.
    `;

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setStory(data.response || "Once upon a time, love found its way... 💖");
    } catch (error) {
      setStory(
        "Love stories are written in the stars... but sometimes, even stars need a little time to shine. ✨"
      );
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-200 via-purple-100 to-red-200 overflow-hidden">
      {/* Background Effects - Floating Hearts & Fireflies */}
      {showEffects && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [Math.random() * 50, Math.random() * -800],
              }}
              transition={{
                duration: Math.random() * 10 + 6,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute text-red-400"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 16}px`,
              }}
            >
              {"❤️"}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        className="bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-lg text-center border-4 border-red-300 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-red-500 mb-4 animate-pulse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          💖 AI Love Story Generator 💖
        </motion.h1>

        <motion.p className="text-gray-700 italic mb-6">
          "Let AI weave your love story into an enchanting fairytale."
        </motion.p>

        {/* Input Fields */}
        {[
          { placeholder: "Your Name", value: name, setter: setName },
          {
            placeholder: "Partner's Name",
            value: partnerName,
            setter: setPartnerName,
          },
          {
            placeholder: "Where did you first meet?",
            value: meetingPlace,
            setter: setMeetingPlace,
          },
          {
            placeholder: "Describe your love story...",
            value: loveStoryDetails,
            setter: setLoveStoryDetails,
          },
          {
            placeholder: "What challenges did your love face?",
            value: obstacles,
            setter: setObstacles,
          },
          {
            placeholder: "Describe a special moment together...",
            value: specialMoments,
            setter: setSpecialMoments,
          },
          {
            placeholder: "How did your love make you feel?",
            value: emotions,
            setter: setEmotions,
          },
        ].map(({ placeholder, value, setter }, index) => (
          <motion.div className="mb-4" key={index}>
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400 shadow-md transition-all duration-200 hover:scale-105"
            />
          </motion.div>
        ))}

        {/* Genre Selector */}
        <motion.div className="mb-4">
          <select
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400 shadow-md"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {genres.map((g, idx) => (
              <option key={idx} value={g}>
                {g}
              </option>
            ))}
          </select>
        </motion.div>

        {story ? (
          <motion.div className="mt-6 p-6 bg-red-100 rounded-lg shadow-md border border-red-300">
            <h2 className="text-2xl font-bold text-red-600 mb-2 animate-pulse">
              Your Love Story 💞
            </h2>
            <motion.p className="text-gray-700 italic">{story}</motion.p>
            <motion.button
              onClick={() => navigator.clipboard.writeText(story)}
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:scale-110 transition-all duration-300"
            >
              Copy Story 📋
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            onClick={getLoveStory}
            className="mt-6 w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 text-lg rounded-full shadow-lg hover:scale-110 transition-transform duration-200 animate-pulse"
          >
            Generate Your Love Story 💫
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
