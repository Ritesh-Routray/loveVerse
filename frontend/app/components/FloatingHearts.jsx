"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heartImg from "@/public/heart.png";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {hearts.map((i) => {
        const size = Math.random() * 100 + 100;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}vw`,
            }}
            initial={{ y: "100vh", opacity: 0.9, rotate: Math.random() * 360 }}
            animate={{
              y: "-10vh",
              opacity: [0.9, 1, 0.9],
              rotate: Math.random() > 0.5 ? 360 : -360,
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            
            <Image
              src={heartImg}
              alt="Floating Heart"
              width={size}
              height={size}
              className="drop-shadow-2xl"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
