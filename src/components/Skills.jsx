import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiOracle,
  SiFigma,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500" />, level: 90 },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      level: 85,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-800" />,
      level: 80,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-700" />,
      level: 80,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-sky-700" />,
      level: 75,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500" />,
      level: 80,
    },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-cyan-500" />,
      level: 100,
    },
    {
      name: "Git / GitHub",
      icon: <FaGitAlt className="text-red-600" />,
      level: 85,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500" />,
      level: 75,
    },
    {
      name: "Oracle SQL",
      icon: <SiOracle className="text-red-600" />,
      level: 100,
    },
    { name: "PL/SQL", icon: <SiOracle className="text-red-500" />, level: 70 },
    { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 70 },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 text-gray-800 px-4 flex flex-col items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/skill.avif')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
          Skills & Tools
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl w-full">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-50 hover:bg-gray-100 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 group w-full"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">
                {skill.name}
              </h3>
              <div className="relative w-full mt-3">
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
