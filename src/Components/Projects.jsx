import {
  Code,
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  Zap,
  Check,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

import artifact from "../assets/1.png";
import hobbyhub from "../assets/3.png";
import jobTrack from "../assets/4.png";
import { NavLink } from "react-router";

const Projects = () => {
  const projects = [
    {
      title: "Artifacta",
      description:
        "Full-stack application for tracking and managing historical artifacts with user authentication and interactive features",
      features: [
        "JWT authenticated artifact management",
        "Like/Dislike functionality with real-time updates",
        "User-specific artifact collections",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
      ],
      image: artifact,
      github: "https://github.com/TaFhiM12/artifacta-client",
      live: "https://artifacta-5240f.web.app/",
      type: "Full Stack",
      
    },
    {
      title: "HobbyHub",
      description:
        "Local hobby group organizer with real-time group management and member interactions",
      features: [
        "Group creation with date validation",
        "Member capacity management",
        "Firebase authentication and real-time updates",
      ],
      technologies: [
        "React",
        "Firebase Auth",
        "MongoDB",
        "Express",
        "React Tooltip",
      ],
      image: hobbyhub,
      github: "https://github.com/TaFhiM12/hobbyHub-client",
      live: "https://hobbyhub-4f8ab.web.app/",
      type: "Full Stack",
    },
    {
      title: "JobTrack",
      description:
        "Interactive job search interface with responsive company listings and authentication UI",
      features: [
        "Dynamic company/job displays from JSON data",
        "Responsive layout for all devices",
        "Client-side authentication flows",
      ],
      technologies: ["React", "Tailwind CSS", "React Router", "Framer Motion"],
      image: jobTrack,
      github: "https://github.com/TaFhiM12/jobTrack-react-app",
      live: "https://auth-integration-jobtrack.web.app/",
      type: "Frontend",
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

  return (
    <section
      id="projects"
      className="relative py-20 mt-10 overflow-hidden bg-gray-950"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
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
            MY PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Full Stack{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Comprehensive applications built with modern technologies and
            user-centric design principles
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2  gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative  overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.type === "Full Stack"
                        ? "bg-gradient-to-r from-purple-500/80 to-cyan-500/80"
                        : "bg-blue-500/80"
                    } text-white`}
                  >
                    {project.type}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/80 text-white flex items-center gap-1">
                      <Star className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300"
                        aria-label="GitHub repository"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github className="w-4 h-4 text-gray-300" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300"
                        aria-label="Live demo"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-4 h-4 text-gray-300" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-cyan-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-300 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-cyan-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.title.includes("Artifacts") && (
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> 150+ artifacts
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> JWT secured
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> MongoDB Atlas
                    </span>
                  </div>
                )}

                {project.title.includes("HobbyHub") && (
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> 20+ groups
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> Date validation
                    </span>
                    <span className="flex items-center gap-1">
                      <Code className="w-4 h-4" /> Theme toggle
                    </span>
                  </div>
                )}

                <motion.div className="mt-2" whileHover={{ x: 5 }}>
                  <NavLink
                    to={`/projects/${project.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-sm font-medium text-white group"
                  >
                    View project details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
