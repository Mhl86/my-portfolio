import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 text-center text-white"
      style={{
        backgroundImage: "url('/ww.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify md:text-center">
          I’m{" "}
          <span className="font-semibold text-blue-300">
            Mhd Hicham Allaham
          </span>
          , a{" "}
          <span className="font-semibold text-blue-300">
            Full-Stack Web Developer
          </span>{" "}
          driven by curiosity and a love for creating digital experiences that
          connect people and ideas. My background in{" "}
          <span className="font-medium text-gray-200">
            Computer Systems Engineering
          </span>{" "}
          laid the foundation for logical problem-solving, while my years in{" "}
          <span className="font-medium text-gray-200">
            customer service and sales
          </span>{" "}
          taught me the art of clear communication and understanding user needs
          — skills that now shape how I design and build the web.
          <br />
          <br />I have completed a{" "}
          <span className="font-medium text-gray-200">
            Full-Stack Web & App Development Bootcamp
          </span>{" "}
          at{" "}
          <span className="font-semibold text-blue-300">WBS Coding School</span>{" "}
          in <span className="font-medium text-gray-200">Berlin, Germany</span>.
          I’ve built projects that combine modern design, responsive interfaces,
          and clean, maintainable code.
          <br />
          <br />I see every project as a chance to learn, experiment, and
          improve — to take a concept from idea to interactive reality. My focus
          is on writing efficient code, creating intuitive user experiences, and
          staying curious about emerging web technologies.
        </p>
      </div>
    </section>
  );
}

export default About;
