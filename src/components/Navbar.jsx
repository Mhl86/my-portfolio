import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "My CV", href: "/cv.pdf", target: "_blank" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            MyPortfolio
          </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden sm:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className="relative group transition-all duration-300"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="sm:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="sm:hidden flex flex-col gap-4 px-6 pb-4 bg-gray-900">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className="block py-2 text-white hover:text-blue-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
