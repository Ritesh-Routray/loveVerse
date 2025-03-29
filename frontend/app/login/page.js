"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login successful! Redirecting...");
      router.push("/");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-300 to-red-400">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md relative">
        <h2 className="text-4xl font-extrabold text-rose-600 text-center font-serif">
          Welcome Back, Love! 💕
        </h2>
        <p className="text-center text-gray-600 italic">
          We missed you! Log in to continue. 💌
        </p>
        <form onSubmit={handleLogin} className="mt-6 space-y-5">
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
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-red-500 text-white py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-lg text-lg tracking-wide"
            disabled={loading}
          >
            {loading ? "Logging in with Love..." : "Log In 💖"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          Don't have an account?{" "}
          <a href="/signup" className="text-rose-500 font-bold hover:underline">
            Sign up 💕
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
