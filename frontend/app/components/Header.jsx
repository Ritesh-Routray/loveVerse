"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-dancing text-pink-600 font-bold">
          LoveVerse
        </h1>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-pink-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-pink-500 transition">
            About
          </a>
          <a href="#learn" className="hover:text-pink-500 transition">
            Learn
          </a>
          <a href="#safety" className="hover:text-pink-500 transition">
            Safety
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Login
            </button>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pink-600"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              About
            </a>
            <a
              href="#learn"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Learn
            </a>
            <a
              href="#safety"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Safety
            </a>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => router.push("/login")}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
              >
                Login
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
