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
      link.download = "Tafhim_Resume.pdf";
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
      className="relative mt-10 flex items-center justify-center overflow-hidden "
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

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              I build exceptional digital experiences with modern technologies.
              Specializing in <span className="text-purple-300">React</span>,{" "}
              <span className="text-cyan-300">Node.js</span>, and{" "}
              <span className="text-blue-300">Cloud Architecture</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  View My Work <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>

              <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative"
              >
                <a
                  href="/resume.pdf"
                  download="Tafhim_Resume.pdf"
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
                {`const developer = {\n  name: "Tanvir Mahtab Tafhim",\n  role: "Full Stack Developer",\n  skills: ["React", "Node.js", "MongoDB"],\n  passion: "Building amazing web experiences"\n};`}
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
                  <div className="text-2xl">👨‍💻</div>
                </motion.div>
              </motion.div>

              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gray-800 rounded-full border-2 border-purple-500/30 flex items-center justify-center shadow-lg">
                <div className="text-3xl">⚛️</div>
              </div>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gray-800 rounded-full border-2 border-cyan-500/30 flex items-center justify-center shadow-lg">
                <div className="text-3xl">🚀</div>
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
