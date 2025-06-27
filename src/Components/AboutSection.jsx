import { Code, Paintbrush, BookOpen, Coffee, Terminal } from "lucide-react";
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
            Crafting digital experiences with both technical precision and
            creative expression
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
                    The Beginning
                  </h3>
                  <p className="text-gray-300">
                    Started my journey at JUST with competitive programming,
                    falling in love with problem-solving through platforms like
                    Codeforces and CodeChef.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      C++
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Algorithms
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
                    Web Discovery
                  </h3>
                  <p className="text-gray-300">
                    Transitioned to web development through university projects,
                    realizing my passion for building interfaces that people
                    actually interact with.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                      JavaScript
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      React
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline item 3 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-950"
                  >
                    <path d="M3 3l18 18"></path>
                    <path d="M21 3L3 21"></path>
                    <path d="M18 6L6 18"></path>
                    <path d="M14 10l-4 4"></path>
                    <path d="M10 14l-4 4"></path>
                  </svg>
                </div>
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Current Focus
                  </h3>
                  <p className="text-gray-300">
                    Deepening my expertise in MERN stack development while
                    continuously sharpening my problem-solving skills through
                    competitive programming challenges.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      MongoDB
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                      Express.js
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-400/10 text-gray-300 border border-gray-400/20">
                      Node.js
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                      Problem Solving
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Personal Card */}
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
                  <Code className="w-10 h-10 text-cyan-300" />
                </div>
                <h3 className="text-xl font-medium text-white">About Me</h3>
              </div>

              <div className="space-y-4 text-gray-300">
                <p className="text-center italic">
                  "I approach coding like storytelling - every project has its
                  own narrative and character."
                </p>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-medium text-white mb-3 text-center">
                    When I'm not coding:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                      <span>Reading sci-fi and tech blogs</span>
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>Watching and playing cricket</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Coffee className="w-5 h-5 text-blue-400" />
                      <span>Brewing specialty coffee</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-medium text-white mb-3 text-center">
                    What Drives Me:
                  </h4>
                  <div className="text-sm space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="text-purple-400">→</span>I get genuinely
                      excited when learning new technologies and frameworks
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-400">→</span>
                      There's nothing like the happiness of solving a tough
                      coding problem
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400">→</span>
                      Every new project is a chance to grow and improve my
                      skills
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-400">→</span>I love that
                      moment when everything "clicks" and suddenly makes sense
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
