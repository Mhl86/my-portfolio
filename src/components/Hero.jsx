import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const [nameLetters, setNameLetters] = useState([]);
  const name = "Mhd Hicham Allaham";

  useEffect(() => {
    setNameLetters(name.split(""));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center leading-tight">
          {/* Mobile (static name) */}
          <span className="block md:hidden">Mhd Hicham Allaham</span>

          {/* Desktop (animated name) */}
          <span className="hidden md:flex flex-wrap justify-center">
            {nameLetters.map((letter, i) => (
              <span
                key={i}
                className="inline-block opacity-0 animate-fadeIn"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-8">
          I'm a{" "}
          <span className="font-semibold text-blue-400">
            Full-Stack Web Developer
          </span>{" "}
          who loves turning ideas into elegant, functional web experiences. I
          build modern, responsive websites using{" "}
          <span className="font-medium text-blue-300">React</span>,{" "}
          <span className="font-medium text-green-300">Node.js</span>, and{" "}
          <span className="font-medium text-amber-300">MongoDB</span>, blending
          creativity with clean, efficient code. Currently based in{" "}
          <span className="font-medium text-white">Germany</span>.
        </p>

        <div className="flex justify-center items-center gap-6 mt-6 text-3xl">
          <a
            href="https://github.com/Mhl86"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mhd-hicham-allaham/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
