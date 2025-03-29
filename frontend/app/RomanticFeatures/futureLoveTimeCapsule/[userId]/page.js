"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function CreateTimeCapsule() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    deliveryDate: "",
    recipientEmail: "",
  });

  const { userId } = useParams();

  const [message, setMessage] = useState("");
  const [hearts, setHearts] = useState([]);
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        { id: Date.now(), left: Math.random() * 100 },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireflies((prev) => [
        ...prev,
        { id: Date.now(), top: Math.random() * 100, left: Math.random() * 100 },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch(`http://localhost:3002/api/createTimeCapsule/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-700 via-red-500 to-purple-800 overflow-hidden">
      <div className="absolute inset-0 animate-aurora z-0"></div>

      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -800, x: [0, 10, -10, 0] }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="absolute text-4xl animate-pulse"
          style={{ left: `${heart.left}%`, top: "100%" }}
        >
          💖
        </motion.div>
      ))}

      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, Math.random() * 20 - 10],
            y: [0, Math.random() * 20 - 10],
          }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-lg filter blur-sm"
          style={{ top: `${firefly.top}%`, left: `${firefly.left}%` }}
        ></motion.div>
      ))}

      <div className="bg-white/10 backdrop-blur-xl shadow-2xl p-10 rounded-3xl max-w-lg w-full border border-pink-400 relative z-10 neon-box">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-white drop-shadow-lg tracking-wider neon-text"
        >
          💌 Future Love Time Capsule
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center text-white/90 mb-6 text-lg"
        >
          Send a message to the future with love. 💕
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <input
              type="text"
              name="title"
              placeholder="Title of Your Love Message"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-4 border border-white/50 rounded-lg bg-transparent text-white placeholder-white/80 outline-none focus:ring-4 focus:ring-pink-400 transition-all duration-300 shadow-md neon-input"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <textarea
              name="content"
              placeholder="Write your love letter here..."
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full p-4 border border-white/50 rounded-lg bg-transparent text-white placeholder-white/80 outline-none focus:ring-4 focus:ring-pink-400 transition-all duration-300 shadow-md h-36 resize-none neon-input"
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <input
              type="datetime-local"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
              className="w-full p-4 border border-white/50 rounded-lg bg-transparent text-white placeholder-white/80 outline-none focus:ring-4 focus:ring-pink-400 transition-all duration-300 shadow-md neon-input"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <input
              type="email"
              name="recipientEmail"
              placeholder="Recipient's Email"
              value={formData.recipientEmail}
              onChange={handleChange}
              required
              className="w-full p-4 border border-white/50 rounded-lg bg-transparent text-white placeholder-white/80 outline-none focus:ring-4 focus:ring-pink-400 transition-all duration-300 shadow-md neon-input"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#ff69b4" }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-lg tracking-wide neon-button"
          >
            💖 Save Your Love Capsule
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-4 text-center font-semibold text-white text-lg"
          >
            {message}
          </motion.p>
        )}
      </div>
    </div>
  );
}
