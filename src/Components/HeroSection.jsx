import { ArrowRight, Mouse, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-h mt-10 flex items-center justify-center overflow-hidden "
      style={{
        background: 'radial-gradient(ellipse at bottom, #0F172A 0%, #020617 100%)'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Subtitle with animated underline */}
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
              Specializing in <span className="text-purple-300">React</span>,{' '}
              <span className="text-cyan-300">Node.js</span>, and{' '}
              <span className="text-blue-300">Cloud Architecture</span>.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium flex items-center justify-center gap-2"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="px-8 py-3 border border-white/10 bg-white/5 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                Download CV <Download className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Visual Elements */}
        <div className="lg:w-1/2 relative">
          {/* Glowing orb */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl"></div>
          
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-1"
          >
            {/* Mock code editor */}
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
            
            {/* Profile image placeholder */}
            <div className="relative h-64 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-4 border-white/10 bg-gray-800 flex items-center justify-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  YN
                </div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gray-800 rounded-full border border-white/10 flex items-center justify-center shadow-lg">
                <div className="text-2xl">⚛️</div>
              </div>
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-gray-800 rounded-full border border-white/10 flex items-center justify-center shadow-lg">
                <div className="text-2xl">🚀</div>
              </div>
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