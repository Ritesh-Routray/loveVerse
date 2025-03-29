"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const predefinedInterests = ["music", "travel", "movies", "books", "fitness"];

const Matchmaking = () => {
  const [userInterest, setUserInterest] = useState("");
  const [matchFound, setMatchFound] = useState(false);
  const [error, setError] = useState("");

  const handleMatch = () => {
    if (!userInterest.trim()) {
      setError("Please enter an interest.");
      setMatchFound(false);
      return;
    }

    const matched = predefinedInterests.includes(userInterest.toLowerCase());
    setMatchFound(matched);
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-red-200">
      <motion.div
        className="bg-white p-8 rounded-xl shadow-xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-rose-600 mb-4">
          💖 Text-Based Matchmaking
        </h2>
        <p className="text-gray-700 mb-6">
          Enter your interests and let AI find your perfect match!
        </p>

        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:ring-rose-500"
          placeholder="Enter your interest (e.g., music)"
          value={userInterest}
          onChange={(e) => setUserInterest(e.target.value)}
        />

        <button
          className="mt-4 bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition"
          onClick={handleMatch}
        >
          Find Match 💘
        </button>

        {error && <p className="text-red-500 mt-3">{error}</p>}

        {matchFound ? (
          <p className="mt-4 text-green-600 font-semibold">
            🎉 Match Found! Start chatting now!
          </p>
        ) : userInterest && !error ? (
          <p className="mt-4 text-gray-600">
            😔 No match found. Try another interest!
          </p>
        ) : null}
      </motion.div>
    </div>
  );
};

export default Matchmaking;
