export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Left Section: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-dancing font-bold text-pink-500">
            LoveVerse
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Connecting hearts, one story at a time. ❤️
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex justify-center space-x-6 mt-4 md:mt-0">
          {["Home", "Stories", "Community", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-pink-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-4 md:mt-0">
          {["facebook", "twitter", "instagram", "heart"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-gray-300 hover:text-pink-400 transition text-2xl"
            >
              <i className={`fab fa-${platform}`} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} LoveVerse. All rights reserved. 💕
      </div>
    </footer>
  );
};
