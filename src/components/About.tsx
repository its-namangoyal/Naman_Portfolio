import React, { useEffect } from 'react';
import { Book, Code, Database, Server } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: backgroundRef, inView: inViewBackground } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: cardsRef, inView: inViewCards } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewBackground) {
      // Custom animation for the background
      document.querySelector('.custom-bg-pattern').classList.add('animate-background');
    }
  }, [inViewBackground]);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white custom-bg-pattern relative"
      ref={backgroundRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
        <h2 className="text-5xl font-extrabold text-center text-black-900 mb-12 tracking-wider leading-tight">
         About Me
        </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master's graduate in Applied Computing from the University of Windsor, passionate about building innovative and scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3
              className={`text-2xl sm:text-3xl md:text-3xl font-semibold text-gray-900 transition-all duration-300 transform ${
                inViewBackground ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Background
            </h3>
            <p
              className={`text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed transition-all duration-700 ${
                inViewBackground ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              As a software developer with a strong foundation in both theory and practice, I specialize in building modern web applications
              using React.js, Node.js, and cloud technologies. My Master's degree has equipped me with advanced knowledge in software
              architecture, distributed systems, and machine learning.
            </p>
            <p
              className={`text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed transition-all duration-700 ${
                inViewBackground ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              I'm passionate about creating efficient, scalable solutions that solve real-world problems. My experience spans from
              front-end development to backend architecture, with a particular focus on cloud-native applications.
            </p>
          </div>

          <div className="space-y-6">
            <h3
              className={`text-2xl sm:text-3xl md:text-3xl font-semibold text-gray-900 transition-all duration-300 transform ${
                inViewBackground ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Technical Expertise
            </h3>
            <div
              ref={cardsRef}
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 transition-all duration-700 ${
                inViewCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Card 1 */}
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                <div className="flex items-center mb-2">
                  <Code className="w-8 h-8 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-lg">Frontend</h4>
                </div>
                <p className="text-gray-600">
                  React.js, Angular, TypeScript, Tailwind CSS, Next.js, GraphQL
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                <div className="flex items-center mb-2">
                  <Server className="w-8 h-8 text-green-600 mr-2" />
                  <h4 className="font-semibold text-lg">Backend</h4>
                </div>
                <p className="text-gray-600">
                  Node.js, Express.js, Django, RESTful APIs, Python, GraphQL
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                <div className="flex items-center mb-2">
                  <Database className="w-8 h-8 text-purple-600 mr-2" />
                  <h4 className="font-semibold text-lg">Databases</h4>
                </div>
                <p className="text-gray-600">
                  MongoDB, PostgreSQL, MySQL, SQLite, Firebase
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                <div className="flex items-center mb-2">
                  <Book className="w-8 h-8 text-orange-600 mr-2" />
                  <h4 className="font-semibold text-lg">Cloud</h4>
                </div>
                <p className="text-gray-600">
                  AWS, Docker, Kubernetes, Azure, Jenkins, CI/CD Pipelines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
