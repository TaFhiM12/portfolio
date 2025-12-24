import {
  Code,
  Database,
  GitMerge,
  Layout,
  Server,
  Zap,
  School,
  Rocket,
  Lightbulb,
  Layers,
  Shield,
  Cloud,
  Box,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

const SkillSection = () => {
  const skills = [
    {
      category: "Core Development Skills",
      icon: Code,
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "Problem Solving", "Algorithmic Thinking"],
      color: "from-blue-500 to-cyan-600",
      badges: [
        {
          name: "Strong Fundamentals",
          icon: <Lightbulb size={14} />,
          color: "bg-blue-500/10 text-blue-400 border border-blue-500/30",
        },
        {
          name: "Clean Code",
          icon: <Zap size={14} />,
          color: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",
        },
      ],
    },
    {
      category: "Frontend Development",
      icon: Layout,
      items: ["React.js", "HTML5/CSS3", "Tailwind CSS", "Responsive Design", "Component Architecture"],
      color: "from-purple-500 to-pink-600",
      badges: [
        {
          name: "9+ Projects Built",
          icon: <Layers size={14} />,
          color: "bg-purple-500/10 text-purple-400 border border-purple-500/30",
        },
        {
          name: "Modern UI/UX",
          icon: <Box size={14} />,
          color: "bg-pink-500/10 text-pink-400 border border-pink-500/30",
        },
      ],
    },
    {
      category: "Backend & Database",
      icon: Server,
      items: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "PostgreSQL", "JWT Authentication"],
      color: "from-green-500 to-emerald-600",
      badges: [
        {
          name: "3+ Full-Stack Apps",
          icon: <Cpu size={14} />,
          color: "bg-green-500/10 text-green-400 border border-green-500/30",
        },
        {
          name: "MERN Stack",
          icon: <Database size={14} />,
          color: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
        },
      ],
    },
    {
      category: "Tools & Deployment",
      icon: Cloud,
      items: ["Git/GitHub", "Firebase", "Vercel", "Netlify", "Postman", "VS Code", "Docker"],
      color: "from-orange-500 to-amber-600",
      badges: [
        {
          name: "CI/CD Ready",
          icon: <Shield size={14} />,
          color: "bg-orange-500/10 text-orange-400 border border-orange-500/30",
        },
        {
          name: "Industry Tools",
          icon: <GitMerge size={14} />,
          color: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const statsVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 mt-10 overflow-hidden bg-gray-950"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-green-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-mono bg-white/5 text-cyan-300 rounded-full mb-4 border border-white/10">
            DEVELOPER SKILLSET
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Building{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Production-Ready
            </span>{" "}
            Applications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Focused on practical web development with strong problem-solving skills, 
            building scalable applications using modern technologies and best practices
          </p>
        </motion.div>

        {/* Skills Grid - Professional Development Focus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-b from-gray-900 to-gray-800 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl from-blue-500 to-cyan-500 blur-xl"></div>
              
              <div
                className={`relative w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${skill.color} shadow-lg`}
              >
                <skill.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="relative font-bold text-white text-xl mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                {skill.category}
              </h3>

              <div className="relative flex flex-wrap gap-2 mb-6">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 hover:border-blue-500/30 hover:text-white transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {skill.badges && (
                <div className="relative pt-6 border-t border-white/10 mt-6">
                  <div className="flex flex-wrap gap-2">
                    {skill.badges.map((badge) => (
                      <span
                        key={badge.name}
                        className={`px-3 py-1.5 text-xs rounded-full flex items-center gap-2 ${badge.color} backdrop-blur-sm`}
                      >
                        {badge.icon} {badge.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Development Journey Timeline - Fresher Focus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden mb-16"
        >
          <div className="relative flex items-center gap-6 mb-10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                My Development Journey
              </h3>
              <p className="text-gray-400 mt-1">From learning fundamentals to building real-world applications</p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500"></div>

            {/* Timeline items */}
            <div className="space-y-10 pl-12">
              {/* Academic Foundation */}
              <div className="relative group">
                <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center border-4 border-gray-950 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="bg-gradient-to-r from-blue-500/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-xl text-white">Computer Science Fundamentals</h4>
                    <span className="text-sm text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">JUST University</span>
                  </div>
                  <p className="text-gray-400 mb-3">Bachelor's in Computer Science & Engineering (CGPA: 3.46/4.00)</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Programming Basics
                    </span>
                    <span className="px-3 py-1 text-sm rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Data Structures
                    </span>
                    <span className="px-3 py-1 text-sm rounded-lg bg-gray-500/10 text-gray-300 border border-gray-500/20">
                      Algorithms
                    </span>
                  </div>
                </div>
              </div>

              {/* Web Development Start */}
              <div className="relative group">
                <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center border-4 border-gray-950 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-xl text-white">Web Development Foundations</h4>
                    <span className="text-sm text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full">2024</span>
                  </div>
                  <p className="text-gray-400 mb-3">Started building interactive web applications with modern technologies</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-white/10">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>🎨</span>
                        <span className="font-medium">Frontend</span>
                      </div>
                      <div className="text-sm text-gray-400">HTML, CSS, JavaScript</div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-white/10">
                      <div className="flex items-center gap-2 text-green-300">
                        <span>⚙️</span>
                        <span className="font-medium">Backend</span>
                      </div>
                      <div className="text-sm text-gray-400">Node.js, Express</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MERN Stack Projects */}
              <div className="relative group">
                <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center border-4 border-gray-950 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="bg-gradient-to-r from-green-500/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-green-500/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-xl text-white">Full-Stack Development</h4>
                    <span className="text-sm text-green-300 bg-green-500/10 px-3 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-gray-400 mb-3">Built production-ready MERN stack applications with real-world features</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-lg bg-green-500/10 text-green-300 border border-green-500/20">
                      MongoDB + Express
                    </span>
                    <span className="px-3 py-1 text-sm rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      React.js
                    </span>
                    <span className="px-3 py-1 text-sm rounded-lg bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                      JWT Authentication
                    </span>
                    <span className="px-3 py-1 text-sm rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      RESTful APIs
                    </span>
                  </div>
                </div>
              </div>

              {/* Current Focus - Advanced Development */}
              <div className="relative group">
                <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center border-4 border-gray-950 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="bg-gradient-to-r from-orange-500/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-xl text-white">Advanced Development Skills</h4>
                    <span className="text-sm text-orange-300 bg-orange-500/10 px-3 py-1 rounded-full">Current Focus</span>
                  </div>
                  <p className="text-gray-400 mb-3">Mastering modern development practices and scalable architecture</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-white/10">
                      <div className="text-blue-300 font-medium mb-1">TypeScript</div>
                      <div className="text-xs text-gray-400">Type-safe development</div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-white/10">
                      <div className="text-green-300 font-medium mb-1">PostgreSQL</div>
                      <div className="text-xs text-gray-400">Relational databases</div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-white/10">
                      <div className="text-purple-300 font-medium mb-1">Next.js</div>
                      <div className="text-xs text-gray-400">Full-stack framework</div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg border border-white/10">
                      <div className="text-cyan-300 font-medium mb-1">Docker</div>
                      <div className="text-xs text-gray-400">Containerization</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Highlights - Fresher Portfolio */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-4">
              Project Portfolio &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Practical Experience
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hands-on experience building complete applications with modern technologies and best practices
            </p>
          </motion.div>

          {/* Project Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: "⚡",
                title: "Frontend Projects",
                value: "9+",
                description: "Interactive UIs built",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: "🚀",
                title: "Full-Stack Apps",
                value: "3+",
                description: "Production applications",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: "🎯",
                title: "Problem Solving",
                value: "Strong",
                description: "Algorithmic thinking",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: "⚛️",
                title: "Modern Stack",
                value: "MERN +",
                description: "Latest technologies",
                color: "from-orange-500 to-amber-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-b from-gray-900 to-gray-800 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="font-medium text-gray-300 mb-1">{stat.title}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Featured Projects */}
          <motion.div
            className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10 border border-white/10 rounded-2xl p-8"
            variants={statsVariants}
          >
            <h4 className="text-xl font-bold text-white mb-6 text-center">
              Featured Full-Stack Projects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  name: "EarnSphereX", 
                  type: "Micro Task Platform",
                  tech: "MERN + Stripe",
                  color: "text-purple-300",
                  description: "Marketplace connecting buyers and workers with payment processing"
                },
                { 
                  name: "Artifacta", 
                  type: "Content Management",
                  tech: "MERN + AI Chatbot",
                  color: "text-cyan-300",
                  description: "Historical artifacts tracker with real-time interaction system"
                },
                { 
                  name: "HobbyHub", 
                  type: "Community Platform",
                  tech: "MERN + Firebase",
                  color: "text-green-300",
                  description: "Hobby group organizer with role-based access control"
                },
              ].map((project, index) => (
                <div key={index} className="bg-gray-800/30 p-5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className={`font-bold text-xl mb-2 ${project.color}`}>{project.name}</div>
                  <div className="text-gray-400 text-sm mb-3">{project.type}</div>
                  <div className="text-sm text-blue-300 mb-3">{project.tech}</div>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">JWT Auth</span>
                    <span className="px-2 py-1 text-xs rounded bg-green-500/10 text-green-300">REST API</span>
                    <span className="px-2 py-1 text-xs rounded bg-purple-500/10 text-purple-300">Responsive</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center text-gray-400 text-sm">
              All projects implement authentication, database management, and modern UI/UX
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;