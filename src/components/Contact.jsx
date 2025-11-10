import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 text-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 bg-white/90 p-8 rounded-lg max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact Me</h2>

        <form
          action="https://formspree.io/f/xvgwydgp"
          method="POST"
          className="flex flex-col gap-4"
        >
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="border border-gray-300 rounded p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
