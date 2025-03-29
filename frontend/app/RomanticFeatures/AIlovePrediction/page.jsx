"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AILovePrediction() {
  const [formData, setFormData] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [showHearts, setShowHearts] = useState(true);

  const questions = [
    {
      id: "Q1",
      question: "What is your current relationship status?",
      type: "mcq",
      options: [
        "Single",
        "Dating",
        "Married",
        "Engaged",
        "Recently Broken Up",
        "Complicated",
      ],
    },
    {
      id: "Q2",
      question: "How would you describe your connection with your partner?",
      type: "mcq",
      options: ["Strong", "Growing", "Complicated", "Confusing", "Distant"],
    },
    {
      id: "Q3",
      question:
        "Describe your first interaction or most memorable romantic moment.",
      type: "text",
    },
    {
      id: "Q4",
      question: "What do you hope for in your love life in the next year?",
      type: "text",
    },
    {
      id: "Q5",
      question: "What is your biggest fear in your love life?",
      type: "text",
    },
    { id: "Q6", question: "What does love mean to you?", type: "text" },
    {
      id: "Q7",
      question: "Which quality is most important in a partner?",
      type: "text",
    },
    {
      id: "Q8",
      question: "How do you handle conflicts in a relationship?",
      type: "text",
    },
    { id: "Q9", question: "What's your love language?", type: "text" },
    { id: "Q10", question: "Do you believe in soulmates?", type: "text" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [questions[currentQuestion].id]: e.target.value,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setPrediction("");
    setShowHearts(false);

    const prompt = `I am a ${questions[0].options[0]} person. My connection with my partner is ${questions[1].options[0]}. My first interaction was ${formData.Q3}. In the next year, I hope for ${formData.Q4}. My biggest fear is ${formData.Q5}. Love means ${formData.Q6}. The most important quality in a partner is ${formData.Q7}. I handle conflicts by ${formData.Q8}. My love language is ${formData.Q9}. I believe in soulmates: ${formData.Q10}.
    Give me some predictions about my love life.`;
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({prompt})
      });

      const storeResponse = await fetch(
        "http://localhost:3002/api/AIlovePrediction",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ storeData }),
        }
      );
      
      const storeData = await storeResponse.json();
      console.log(storeData);
      const data = await response.json();
      setPrediction(data.response || "Something magical is on its way... 💖");
    } catch (error) {
      console.log(error);
      setPrediction("Oops! Love is unpredictable, try again later. 💔");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 overflow-hidden">
      {/* Floating Hearts Animation */}
      {showHearts && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [Math.random() * 20, Math.random() * -300],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 6 + 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              className="absolute text-red-500"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 10}px`,
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg text-center border-4 border-pink-400 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-pink-600 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          💖 AI Love Predictor 💖
        </motion.h1>

        {!prediction ? (
          <motion.div
            key={questions[currentQuestion].id}
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-lg font-semibold text-pink-600">
              {questions[currentQuestion].question}
            </label>

            {questions[currentQuestion].type === "mcq" ? (
              <select
                value={formData[questions[currentQuestion].id] || ""}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-pink-300 rounded-lg bg-white text-gray-800 focus:ring-4 focus:ring-pink-300 focus:outline-none transition-all duration-300 hover:border-pink-500"
              >
                <option value="" disabled>
                  Choose an option
                </option>
                {questions[currentQuestion].options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <textarea
                value={formData[questions[currentQuestion].id] || ""}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-pink-300 rounded-lg bg-white text-gray-800 focus:ring-4 focus:ring-pink-300 focus:outline-none transition-all duration-300 hover:border-pink-500 resize-none"
                rows="3"
                placeholder="Write your answer here..."
              />
            )}

            <motion.button
              onClick={nextQuestion}
              className="mt-6 w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 text-lg rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-200 animate-pulse"
            >
              {currentQuestion === questions.length - 1
                ? "Reveal My Love Destiny 💖"
                : "Next 💞"}
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            className="mt-6 p-6 bg-pink-100 rounded-lg shadow-md border border-pink-300 animate-fade-in"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-2 animate-pulse">
              Your Love Prediction 💌
            </h2>
            <motion.p
              className="text-gray-700 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {loading ? "💘 Generating your love prediction..." : prediction}
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
