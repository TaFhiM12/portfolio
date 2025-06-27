import {
  Code,
  School,
  Trophy,
  BookOpen,
  Cpu,
  BrainCircuit,
  Code2,
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
        "Gaining strong theoretical foundation and practical skills in computer science",
      highlights: [
        "CGPA: 3.45/4.0 (Top 20% of class)",
        "Relevant coursework: Data Structures, Algorithms, DBMS, Web Technologies",
        "Final year project: Developing AI-integrated web application",
      ],
    },
    {
      icon: <Code className="text-cyan-400" />,
      title: "Practical Training",
      organization: "Programming Hero Bootcamp",
      period: "2024 (6 months)",
      description: "Hands-on training in modern web development practices",
      highlights: [
        "Built 9 interactive frontend projects using React & Tailwind CSS",
        "Developed 2 full-stack applications with MongoDB, Express, and Node.js",
        "Mastered industry tools: Git, VS Code, Chrome DevTools, Postman",
        "Implemented authentication, API integration, and responsive design",
      ],
    },
    {
      icon: <Trophy className="text-yellow-400" />,
      title: "Competitive Programming",
      organization: "Online Platforms",
      period: "2021 - Present",
      description: "Regular practice to enhance problem-solving abilities",
      highlights: [
        "Codeforces: Pupil (Top 30% of participants)",
        "CodeChef: 3-star coder (1600+ rating)",
        "Solved 300+ algorithmic problems",
      ],
    },
    {
      icon: <BookOpen className="text-blue-400" />,
      title: "Self-Directed Learning",
      organization: "Personal Projects",
      period: "2022 - Present",
      description: "Building real-world applications to apply knowledge",
      highlights: [
        "Developed full-stack applications using MERN stack",
        "Created responsive UIs with modern frameworks",
        "Implemented authentication and database systems",
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
            MY DEVELOPMENT PATH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Building My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            While I'm just beginning my professional journey, my academic
            projects and self-driven learning have given me substantial hands-on
            experience
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>

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
                        <span className="text-purple-400 mt-0.5">•</span>
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
          className="mt-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Building My Future Skills
              </h3>
              <p className="text-gray-300">
                Actively preparing for my professional journey through focused
                learning
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all">
              <h4 className="font-medium text-purple-300 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> MERN & Next.js
              </h4>
              <p className="text-gray-300 text-sm">
                Mastering backend architecture and modern frontend frameworks
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all">
              <h4 className="font-medium text-cyan-300 mb-2 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" /> AI Integration
              </h4>
              <p className="text-gray-300 text-sm">
                Exploring practical AI applications for web development
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all">
              <h4 className="font-medium text-blue-300 mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> CS Fundamentals
              </h4>
              <p className="text-gray-300 text-sm">
                Strengthening core concepts for technical interviews
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
