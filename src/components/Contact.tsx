import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code as LeetCodeIcon, Award as HackerRankIcon } from 'lucide-react';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleMailClick = () => {
    setShowEmail(!showEmail); // Toggle the email visibility
  };

  return (
    <section
      id="contact"
      className="min-h-[35vh] bg-gradient-to-b from-gray-900 to-gray-800 text-white py-6 relative"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,0,0,1)_70%,transparent_110%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Let’s Connect
          </h2>
          <p className="text-gray-300 mt-2">
            Reach out for collaboration, questions, or a friendly chat.
          </p>
        </div>

        {/* Contact Options - Flex layout for smaller cards */}
        <div className="flex justify-center gap-4 text-center">
          {/* Card - Email */}
          <div
            className="p-4 bg-gray-800/70 rounded-lg hover:shadow-lg hover:border-blue-500 border border-gray-700/50 transition w-16 h-16 flex items-center justify-center cursor-pointer"
            onClick={handleMailClick} // Toggle email visibility on click
          >
            <Mail className="w-8 h-8 text-blue-500" />
          </div>

          {/* Show email if clicked */}
          {showEmail && (
            <div className="text-center text-white mt-2">
              <p>Email: <a href="mailto:namanagoyal1524@gmail.com" className="text-blue-500">namanagoyal1524@gmail.com</a></p>
            </div>
          )}

          {/* Other contact cards (Phone, LinkedIn, GitHub, etc.) */}
          <a
            href="tel:+1234567890"
            className="p-4 bg-gray-800/70 rounded-lg hover:shadow-lg hover:border-blue-500 border border-gray-700/50 transition w-16 h-16 flex items-center justify-center"
          >
            <Phone className="w-8 h-8 text-blue-500" />
          </a>

          <a
            href="https://www.linkedin.com/in/-naman-goyal/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/70 rounded-lg hover:shadow-lg hover:border-blue-500 border border-gray-700/50 transition w-16 h-16 flex items-center justify-center"
          >
            <Linkedin className="w-8 h-8 text-blue-500" />
          </a>

          <a
            href="https://github.com/its-namangoyal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/70 rounded-lg hover:shadow-lg hover:border-blue-500 border border-gray-700/50 transition w-16 h-16 flex items-center justify-center"
          >
            <Github className="w-8 h-8 text-blue-500" />
          </a>

          <a
            href="https://leetcode.com/u/naman_goyal_/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/70 rounded-lg hover:shadow-lg hover:border-blue-500 border border-gray-700/50 transition w-16 h-16 flex items-center justify-center"
          >
            <LeetCodeIcon className="w-8 h-8 text-blue-500" />
          </a>

          <a
            href="https://www.hackerrank.com/profile/11901825_N"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/70 rounded-lg hover:shadow-lg hover:border-blue-500 border border-gray-700/50 transition w-16 h-16 flex items-center justify-center"
          >
            <HackerRankIcon className="w-8 h-8 text-blue-500" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <hr className="border-gray-500" />
          <p className="text-gray-500 text-sm mt-2">
            Created by Naman Goyal
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
