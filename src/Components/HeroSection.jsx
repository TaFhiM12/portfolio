import { ArrowRight, Mouse, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    setIsDownloading(true);

    try {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Tanvir_Mahtab_Tafhim_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="home"
      className="relative mt-10 flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #0F172A 0%, #020617 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block relative mb-4">
              <span className="text-purple-400 font-mono text-sm md:text-base">
                Hi, I'm
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></span>
            </div>

            {/* Name */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tanvir Mahtab Tafhim
              </span>
            </h2>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack MERN Developer
              </span>
            </h1>

            {/* Description - Updated with your skills and focus */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Building scalable web applications with{" "}
              <span className="text-purple-300">TypeScript</span>,{" "}
              <span className="text-cyan-300">React.js</span>,{" "}
              <span className="text-green-300">Node.js</span>, and mastering{" "}
              <span className="text-orange-300">PostgreSQL</span> &{" "}
              <span className="text-blue-300">Next.js</span> for enterprise-grade solutions.
            </p>

            {/* Competitive Programming Badges */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-purple-500/20 border border-purple-500/30 rounded-full flex items-center gap-2"
              >
                <span className="text-lg">📊</span>
                <span className="text-sm text-purple-300 font-medium">
                  Codeforces Pupil
                </span>
                <span className="text-xs text-gray-400">(1288)</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-blue-500/20 border border-blue-500/30 rounded-full flex items-center gap-2"
              >
                <span className="text-lg">👨‍💻</span>
                <span className="text-sm text-blue-300 font-medium">
                  CodeChef 3⭐
                </span>
                <span className="text-xs text-gray-400">(1705)</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-orange-500/20 border border-orange-500/30 rounded-full flex items-center gap-2"
              >
                <span className="text-lg">🎯</span>
                <span className="text-sm text-orange-300 font-medium">
                  Next Level Course
                </span>
                <span className="text-xs text-gray-400">(Oct'25)</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>

              <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative"
              >
                <a
                  href="/resume.pdf"
                  download="Tanvir_Mahtab_Tafhim_Resume.pdf"
                  onClick={handleDownload}
                >
                  <motion.div
                    initial={{ boxShadow: "0 0 0 0 rgba(124, 58, 237, 0.7)" }}
                    animate={{
                      boxShadow: isHovered
                        ? "0 0 10px 5px rgba(124, 58, 237, 0.7)"
                        : "0 0 0 0 rgba(124, 58, 237, 0.7)",
                      background: isHovered
                        ? "linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))"
                        : "linear-gradient(to right, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))",
                    }}
                    transition={{
                      duration: 0.3,
                      boxShadow: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2,
                      },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 border ${
                      isHovered ? "border-purple-500/30" : "border-white/10"
                    } text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300`}
                  >
                    {isDownloading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <motion.div
                          animate={{
                            rotate: isHovered ? [0, 10, -10, 0] : 0,
                            y: isHovered ? [0, -2, 2, 0] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <Download className="w-4 h-4" />
                        </motion.div>
                        <motion.span
                          animate={{
                            x: isHovered ? [0, 2, -2, 0] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          Resume
                        </motion.span>
                        {isHovered && (
                          <>
                            <motion.span
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center"
                            >
                              <motion.span
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
                              />
                            </motion.span>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                            />
                          </>
                        )}
                      </>
                    )}
                  </motion.div>
                </a>
                {isHovered && !isDownloading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -bottom-8 left-0 w-full text-center text-purple-300 text-xs font-mono"
                  >
                    Click to download!
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-1"
          >
            <div className="bg-gray-950 p-4 rounded-t-xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-green-400 font-mono text-sm">
                {`const developer = {
  name: "Tanvir Mahtab Tafhim",
  role: "Full Stack MERN Developer",
  focus: "TypeScript, Next.js, PostgreSQL",
  education: "B.Sc CSE at JUST",
  projects: ["EarnSphereX", "Artifacta", "HobbyHub"],
  competitive: "Codeforces Pupil | CodeChef 3⭐"
};`}
              </pre>
            </div>

            <div className="relative h-80 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 flex items-center justify-center">
              <motion.div
                className="relative w-60 h-60"
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(124, 58, 237, 0.4)",
                      "0 0 0 15px rgba(124, 58, 237, 0)",
                      "0 0 0 30px rgba(124, 58, 237, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />

                <div className="relative w-full h-full rounded-full border-[6px] border-transparent p-0.5 bg-gradient-to-br from-purple-500 to-cyan-500">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-gray-900">
                    <img
                      className="w-full h-full object-cover"
                      src="./developer.jpg"
                      alt="Tanvir Mahtab Tafhim"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent" />
                  </div>
                </div>

                {/* Project Badge 1 */}
                <motion.div
                  className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-gray-800 border-2 border-purple-500/50 flex items-center justify-center shadow-lg z-10"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div className="text-sm font-bold text-purple-300">MERN</div>
                </motion.div>

                {/* Project Badge 2 */}
                <motion.div
                  className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gray-800 border-2 border-cyan-500/50 flex items-center justify-center shadow-lg z-10"
                  animate={{
                    y: [0, -3, 0],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                >
                  <div className="text-xs font-bold text-cyan-300">TS</div>
                </motion.div>
              </motion.div>

              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gray-800 rounded-full border-2 border-purple-500/30 flex items-center justify-center shadow-lg">
                <div className="text-2xl">⚛️</div>
              </div>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gray-800 rounded-full border-2 border-cyan-500/30 flex items-center justify-center shadow-lg">
                <div className="text-2xl">🚀</div>
              </div>

              {/* Code badges around profile */}
              <div className="absolute top-4 left-4 px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="text-xs text-green-400 font-mono">MongoDB</span>
              </div>
              <div className="absolute top-4 right-4 px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="text-xs text-blue-400 font-mono">Express</span>
              </div>
              <div className="absolute bottom-4 left-4 px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="text-xs text-cyan-400 font-mono">React</span>
              </div>
              <div className="absolute bottom-4 right-4 px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="text-xs text-green-400 font-mono">Node.js</span>
              </div>

              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/10"
                  initial={{
                    x: Math.random() * 150 - 75,
                    y: Math.random() * 150 - 75,
                    scale: Math.random() * 0.5 + 0.5,
                    opacity: 0,
                  }}
                  animate={{
                    x: Math.random() * 150 - 75,
                    y: Math.random() * 150 - 75,
                    opacity: [0, 0.3, 0],
                    transition: {
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  style={{
                    width: `${Math.random() * 8 + 3}px`,
                    height: `${Math.random() * 8 + 3}px`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <Mouse className="w-5 h-5 text-gray-400 mb-2" />
        <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;