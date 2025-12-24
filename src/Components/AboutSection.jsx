import { Code, Paintbrush, BookOpen, Coffee, Terminal, Rocket, Database, Server } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 mt-10 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-mono bg-white/5 text-cyan-300 rounded-full mb-4 border border-white/10">
            ABOUT ME
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Hello,
            </span>{" "}
            I'm a Developer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Transforming problem-solving skills from competitive programming into building scalable, full-stack applications
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column - Timeline Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="relative pl-10 border-l-2 border-purple-500/30 space-y-10">
              {/* Timeline item 1 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                  <Terminal className="w-3 h-3 text-gray-950" />
                </div>
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-medium text-white mb-2">
                    The Algorithmic Foundation
                  </h3>
                  <p className="text-gray-300">
                    Began my journey at JUST with competitive programming, mastering data structures and algorithms on Codeforces, CodeChef, and LeetCode - solving 300+ problems across platforms.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      C/C++
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Algorithms
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                      Problem Solving
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline item 2 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                  <Code className="w-3 h-3 text-gray-950" />
                </div>
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Web Development Foundations
                  </h3>
                  <p className="text-gray-300">
                    Mastered MERN stack through Programming Hero bootcamp, building 9+ frontend projects and 3+ full-stack applications with MongoDB, Express, React, and Node.js.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                      MERN Stack
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-400/10 text-gray-300 border border-gray-400/20">
                      Node.js
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline item 3 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                  <Rocket className="w-3 h-3 text-gray-950" />
                </div>
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Next Level Journey
                  </h3>
                  <p className="text-gray-300">
                    Currently advancing through Programming Hero Level-2 course, focusing on TypeScript, PostgreSQL, Next.js, Prisma ORM, and backend optimization for enterprise-grade applications.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                      PostgreSQL
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      Next.js
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Prisma ORM
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      Advanced Backend
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3 lg:sticky lg:top-20"
          >
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-2 border-white/10 mb-4 flex items-center justify-center">
                  <Server className="w-10 h-10 text-cyan-300" />
                </div>
                <h3 className="text-xl font-medium text-white">Developer Journey</h3>
              </div>

              <div className="space-y-4 text-gray-300">
                <p className="text-center italic">
                  "From competitive programming algorithms to building scalable web applications - always learning, always growing."
                </p>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-medium text-white mb-3 text-center">
                    Current Learning Focus:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-purple-400" />
                      <span>PostgreSQL & Advanced RDBMS</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-cyan-400"
                      >
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                      </svg>
                      <span>TypeScript & System Design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Rocket className="w-5 h-5 text-blue-400" />
                      <span>Next.js 16 & Full-Stack AI Apps</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-medium text-white mb-3 text-center">
                    Development Philosophy:
                  </h4>
                  <div className="text-sm space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="text-purple-400">→</span>
                      <strong>Algorithm-first mindset:</strong> Apply problem-solving skills from competitive programming to real-world development
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-400">→</span>
                      <strong>Type-safe development:</strong> Building robust systems with TypeScript and modern tooling
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      <strong>Database excellence:</strong> Mastering both NoSQL (MongoDB) and SQL (PostgreSQL) for optimal solutions
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-400">→</span>
                      <strong>Full-stack mastery:</strong> From UI/UX to database optimization - understanding the complete stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;