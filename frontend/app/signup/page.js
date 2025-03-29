"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("Passwords do not match!");

    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      alert("Signup successful! Redirecting to login...");
      router.push("/login");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-300 to-red-400">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg relative">
        <h2 className="text-4xl font-extrabold text-rose-600 text-center font-serif">
          Welcome, Love!
        </h2>
        <p className="text-center text-gray-600 italic">
          Join us on a journey of elegance and romance. 💖
        </p>
        <form onSubmit={handleSignup} className="mt-6 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-sm text-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-sm text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-sm text-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-sm text-gray-700"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-red-500 text-white py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-lg text-lg tracking-wide"
            disabled={loading}
          >
            {loading ? "Signing up with Love..." : "Sign Up 💕"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-rose-500 font-bold hover:underline">
            Log in 💌
          </a>
        </p>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-pulse">
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-rose-300 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-red-400 rounded-full opacity-40 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
