import {
  Code,
  Cpu,
  Database,
  GitMerge,
  Layout,
  Server,
  Smartphone,
  Trophy,
  School,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const SkillSection = () => {
  const skills = [
    {
      category: "Competitive Programming",
      icon: Trophy,
      items: ["C/C++", "Data Structures", "Algorithms", "Problem Solving"],
      color: "from-purple-500 to-purple-700",
      badges: [
        {
          name: "Codeforces (Pupil)",
          icon: "📊",
          color: "bg-purple-500/10 text-purple-400",
        },
        {
          name: "CodeChef (3⭐)",
          icon: "👨‍💻",
          color: "bg-blue-500/10 text-blue-400",
        },
        {
          name: "LeetCode",
          icon: "🏆",
          color: "bg-yellow-500/10 text-yellow-400",
        },
        {
          name: "GeeksforGeeks",
          icon: "📚",
          color: "bg-green-500/10 text-green-400",
        },
      ],
    },
    {
      category: "Frontend Development",
      icon: Layout,
      items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      color: "from-cyan-500 to-cyan-700",
      badges: [
        {
          name: "EDGE-JUST-CSE",
          icon: <School size={14} />,
          color: "bg-cyan-500/10 text-cyan-400",
        },
        {
          name: "Programming Hero",
          icon: <Rocket size={14} />,
          color: "bg-pink-500/10 text-pink-400",
        },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      items: ["Node.js", "Express", "MongoDB", "REST APIs"],
      color: "from-blue-500 to-blue-700",
    },
    {
      category: "Tools & Other",
      icon: GitMerge,
      items: ["Git/GitHub", "VS Code", "Figma", "Postman"],
      color: "from-green-500 to-green-700",
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
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
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
            MY SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Algorithms
            </span>{" "}
            to Applications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Transitioning my problem-solving skills from competitive programming
            to building full-stack web applications
          </p>
        </motion.div>

        {/* Skills Grid - Visual Tags */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${skill.color}`}
              >
                <skill.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-bold text-white text-lg mb-4">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {skill.badges && (
                <div className="pt-4 border-t border-white/10 mt-4">
                  <div className="flex flex-wrap gap-2">
                    {skill.badges.map((badge) => (
                      <span
                        key={badge.name}
                        className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${badge.color} border border-white/10`}
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

        {/* Coding Journey Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">
              My Development Journey
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>

            {/* Timeline items */}
            <div className="space-y-8 pl-12">
              {/* JUST Admission */}
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center border-4 border-gray-950">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <h4 className="font-medium text-white">
                  Started Computer Science at JUST
                </h4>
                <p className="text-sm text-gray-400 mb-2">
                  2021 - First exposure to C programming
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    C Language
                  </span>
                </div>
              </div>

              {/* Competitive Programming */}
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center border-4 border-gray-950">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <h4 className="font-medium text-white">
                  Competitive Programming Phase
                </h4>
                <p className="text-sm text-gray-400 mb-2">
                  2021-Present - Continued problem solving alongside <br /> web
                  development
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    C++
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    DSA
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Problem Solving
                  </span>
                </div>
              </div>

              {/* Web Development Start */}
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center border-4 border-gray-950">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <h4 className="font-medium text-white">
                  Web Development Beginnings
                </h4>
                <p className="text-sm text-gray-400 mb-2">
                  2024 - University projects & EDGE-JUST-CSE training
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    HTML/CSS
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    JavaScript
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    React
                  </span>
                </div>
              </div>

              {/* Current Focus */}
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center border-4 border-gray-950">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <h4 className="font-medium text-white">
                  Current Focus (4th Year)
                </h4>
                <p className="text-sm text-gray-400 mb-2">
                  2024-present - MERN Stack & Professional Development
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    Express
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    Node.js
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    React
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div
            className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center border-4 border-gray-950"
            variants={itemVariants}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </motion.div>

          <motion.h4 className="font-medium text-3xl text-white" variants={itemVariants}>
             Competitive{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Algorithms
            </span>{" "}
            & Projects
          </motion.h4>

          <motion.p
            className="text-sm text-gray-400 mb-8 mt-2"
            variants={itemVariants}
          >
            2021-Present - Solved{" "}
            <span className="text-blue-300">300+ problems</span> across
            platforms
          </motion.p>

          {/* Platform Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 w-[70%] mx-auto"
            variants={containerVariants}
          >
            {[
              {
                icon: "📊",
                platform: "Codeforces",
                desc: "Pupil (1200+)",
                solved: "350+",
                color: "text-blue-400",
              },
              {
                icon: "👨‍💻",
                platform: "CodeChef",
                desc: "3⭐ (1600+)",
                solved: "400+",
                color: "text-purple-400",
              },
              {
                icon: "🏆",
                platform: "LeetCode",
                desc: "Contest Rating",
                solved: "70+",
                color: "text-yellow-400",
              },
              {
                icon: "📚",
                platform: "GFG",
                desc: "DSA Practice",
                solved: "100+",
                color: "text-green-400",
              },
            ].map((item, index) => (
              <motion.div
                key={item.platform}
                className="bg-gray-800/50 p-3 rounded-lg border border-white/10 flex flex-col justify-center items-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`flex items-center gap-2 ${item.color}`}>
                  <span>{item.icon}</span>
                  <span className="font-mono text-sm">{item.platform}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
                <div className="text-white text-sm mt-1">
                  {item.solved} solved
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Stats */}
          <motion.div className="flex flex-col md:flex-row w-[70%] mx-auto gap-3" variants={statsVariants}>
            <motion.div
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3 rounded-lg border border-white/10 flex-1"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-cyan-300 text-sm mb-1">Frontend</div>
              <div className="text-white font-medium">9+ Projects</div>
              <div className="text-gray-400 text-xs mt-1">React, Tailwind</div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-3 rounded-lg border border-white/10 flex-1"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-cyan-300 text-sm mb-1">Full Stack</div>
              <div className="text-white font-medium">3+ Projects</div>
              <div className="text-gray-400 text-xs mt-1">MERN Stack</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
