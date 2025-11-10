import React, { useState } from "react";

const projectList = [
  {
    title: "Kids Kare Hub",
    shortDescription:
      "A full-stack web app connecting parents with trusted childcare providers. Built with React, TailwindCSS, Node.js, Express, and PostgreSQL.",
    fullDescription: `Kids Kare Hub is a responsive full-stack web application designed to connect parents with trusted childcare providers in a simple, reliable, and visually engaging way. Built with React and TailwindCSS on the front end, and powered by a Node.js and Express backend with a PostgreSQL database, the platform emphasizes clarity, performance, and usability — allowing parents to browse services, view caregiver profiles, and get in touch seamlessly.

Tech Stack: React, TailwindCSS, JavaScript, Vite, Node.js, Express.js, PostgreSQL, HTML5, CSS3.`,
    video: "/kids.mp4",
  },
  {
    title: "Manhattan Project",
    shortDescription:
      "A web application for managing and visualizing project timelines.",
    fullDescription: `The Manhattan Project is a web application designed to help teams manage and visualize their project timelines effectively. Built with React and D3.js, the app allows users to create, edit, and share project timelines in a collaborative environment.

Tech Stack: React, D3.js, Node.js, Express.js, MongoDB, HTML5, CSS3.`,
    video: "/Manhattan.mp4",
  },
  {
    title: "Daily Diary",
    shortDescription: "A personal diary application for daily reflections.",
    fullDescription: `Daily Diary is a personal diary application that allows users to write and manage their daily reflections and thoughts. Built with React and Firebase, the app provides a simple and intuitive interface for users to create, edit, and delete diary entries.

Tech Stack: React, Firebase, HTML5, CSS3.`,
    video: "/Daily.mp4",
  },
  {
    title: "Book Finder",
    shortDescription: "A web application for finding and managing books.",
    fullDescription: `Book Finder is a web application that allows users to search for, discover, and manage their book collections. Built with React and a Google Books API, the app provides a seamless experience for users to browse books, view details, and keep track of their reading progress.

Tech Stack: React, Google Books API, HTML5, CSS3.`,
    video: "/book.mp4",
  },
  {
    title: "PokeDex Explorer",
    shortDescription: "A web application for exploring Pokémon data.",
    fullDescription: `PokeDex Explorer is a web application that allows users to search for and explore detailed information about various Pokémon. Built with React and the Pokémon API, the app provides a user-friendly interface for browsing Pokémon, viewing their stats, and learning about their abilities.

Tech Stack: React, Pokémon API, HTML5, CSS3.`,
    video: "/Pokemon.mp4",
  },
  {
    title: "Choose a Number Game",
    shortDescription: "A web application for playing a number guessing game.",
    fullDescription: `Choose a Number Game is a fun and interactive web application that challenges users to guess a randomly selected number within a range of 1 to 3. Built with Node.js, the app provides a simple interface for users to input their guesses and receive feedback on their attempts.

Tech Stack: , Node.js.`,
    video: "/number.mp4",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-20 px-6 text-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/pro.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-blue-600">My Projects</h2>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md w-80 hover:scale-105 transform transition cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Video or Image */}
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  autoPlay
                  loop
                  muted
                  className="rounded-md mb-4 w-full h-48 object-cover"
                />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md mb-4 w-full h-48 object-cover"
                />
              ) : null}

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.shortDescription}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[9999] px-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg max-w-2xl p-6 text-left relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                {selectedProject.title}
              </h3>

              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  loop
                  muted
                  className="rounded-md mb-4 w-full h-auto max-h-64 object-cover"
                />
              ) : selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-md mb-4 w-full h-64 object-cover"
                />
              ) : null}

              <p className="text-gray-700 whitespace-pre-line">
                {selectedProject.fullDescription}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
