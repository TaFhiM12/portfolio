import {
  Code,
  School,
  Trophy,
  BookOpen,
  Cpu,
  BrainCircuit,
  Code2,
  Database,
  Server,
  Layers,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: <School className="text-purple-400" />,
      title: "BSc in Computer Science",
      organization: "Jashore University of Science & Technology",
      period: "2021 - Present",
      description:
        "Building strong theoretical foundation in computer science while applying knowledge through practical projects",
      highlights: [
        "CGPA: 3.45/4.0 (Top 20% of class)",
        "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Technologies",
        "Actively applying academic concepts to real-world web development",
      ],
    },
    {
      icon: <Code className="text-cyan-400" />,
      title: "Professional Web Development",
      organization: "Programming Hero Bootcamp",
      period: "2024 (Level 1 Complete)",
      description: "Comprehensive training in modern web development stack and best practices",
      highlights: [
        "Built 9+ interactive frontend projects using React & Tailwind CSS",
        "Developed 3+ full-stack applications with MERN Stack",
        "Mastered Git, API integration, authentication, and deployment",
        "Completed final project: AI-integrated full-stack application",
      ],
    },
    {
      icon: <GraduationCap className="text-orange-400" />,
      title: "Next Level Web Development",
      organization: "Programming Hero Level-2 Course",
      period: "October 2025 - Present",
      description: "Advanced training focusing on TypeScript, PostgreSQL, Next.js, and enterprise-grade development",
      highlights: [
        "Mission 1: TypeScript Mastery (Basic to Advanced Types, OOP)",
        "Mission 2: Node.js, Express & SQL (PostgreSQL, Advanced CRUD)",
        "Mission 3: RDBMS & Database Design (Normalization, Advanced Queries)",
        "Mission 4: Prisma ORM & Next.js (Full-stack with TypeScript)",
        "Mission 5-8: Industry Projects with AI Integration & Golang",
        "Mission 9: Docker, NGINX, AWS, Testing & SWE Fundamentals",
      ],
    },
    {
      icon: <Trophy className="text-yellow-400" />,
      title: "Competitive Programming & Problem Solving",
      organization: "Multiple Platforms",
      period: "2021 - Present",
      description: "Continuous practice to enhance algorithmic thinking and problem-solving abilities",
      highlights: [
        "Codeforces: Pupil (1200+ rating, 350+ problems solved)",
        "CodeChef: 3-star coder (1600+ rating, 400+ problems solved)",
        "LeetCode & GeeksforGeeks: 100+ problems",
        "Strong foundation in Data Structures & Algorithms",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 mt-10 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-mono bg-white/5 text-cyan-300 rounded-full mb-4 border border-white/10">
            MY LEARNING JOURNEY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Foundation
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Next Level
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A structured learning path combining academic excellence, professional training, and continuous skill development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-orange-500"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative pl-10 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                }`}
              >
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "left-0" : "md:left-1/2 md:-ml-2.5 left-0"
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center border-4 border-gray-950">
                    {exp.icon}
                  </div>
                </div>

                <div
                  className={`bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg transition-all ${
                    index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium">{exp.title}</span>
                    <span className="text-gray-400 text-sm">
                      • {exp.organization}
                    </span>
                  </div>
                  <span className="text-xs text-cyan-300">{exp.period}</span>
                  <p className="text-gray-300 mt-2 text-sm">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className={`${
                          index === 0 ? "text-purple-400" :
                          index === 1 ? "text-cyan-400" :
                          index === 2 ? "text-orange-400" : "text-yellow-400"
                        } mt-0.5`}>•</span>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Current Learning Stack
              </h3>
              <p className="text-gray-300">
                Building enterprise-ready skills through structured curriculum
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all">
              <h4 className="font-medium text-purple-300 mb-2 flex items-center gap-2">
                <Database className="w-4 h-4" /> TypeScript & Databases
              </h4>
              <p className="text-gray-300 text-sm">
                TypeScript OOP, PostgreSQL, Prisma ORM, RDBMS Design
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all">
              <h4 className="font-medium text-cyan-300 mb-2 flex items-center gap-2">
                <Server className="w-4 h-4" /> Advanced Backend
              </h4>
              <p className="text-gray-300 text-sm">
                Node.js optimization, Express.js, REST APIs, Authentication
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10 hover:border-orange-400/30 transition-all">
              <h4 className="font-medium text-orange-300 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Full-Stack Frameworks
              </h4>
              <p className="text-gray-300 text-sm">
                Next.js 14, SSR/SSG, API Routes, Authentication Systems
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10 hover:border-yellow-400/30 transition-all">
              <h4 className="font-medium text-yellow-300 mb-2 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" /> DevOps & Cloud
              </h4>
              <p className="text-gray-300 text-sm">
                Docker, NGINX, AWS, CI/CD, Testing, Software Engineering
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Following the complete <span className="text-cyan-300">Programming Hero Level-2</span> curriculum with 
              <span className="text-orange-300"> 9 Missions</span> and <span className="text-purple-300"> 66+ Modules</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;