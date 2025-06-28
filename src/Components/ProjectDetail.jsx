import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  GitBranch,
  GitPullRequest,
  Server,
  Monitor,
  Globe,
  Cpu,
  Database,
  Code,
  Zap,
  Check,
  Layers,
  Shield,
  Terminal,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('features');
  const { id } = useParams();

  useEffect(() => {
    axios('/projects.json')
      .then(response => {
        const projects = response.data;
        const foundProject = projects.find(proj => proj.id === id);
        setProject(foundProject || null);
      })
      .catch(error => {
        console.error("Error fetching project data:", error);
        setProject(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center min-h-screen bg-gray-950"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-16 h-16 rounded-full border-4 border-cyan-500/30 border-t-cyan-500"
        />
      </motion.div>
    );
  }

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-screen bg-gray-950 text-white"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-400 mb-6">The requested project could not be located in our archives.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="mr-2" /> Return to Gallery
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen mt-10 bg-gray-950 text-gray-100 pt-20 pb-20"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-8"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center group text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <motion.span whileHover={{ x: -3 }} className="inline-flex items-center">
              <ArrowLeft className="mr-2 w-4 h-4" /> 
              <span className="border-b border-transparent group-hover:border-gray-400 transition-all">
                Back to Projects
              </span>
            </motion.span>
          </Link>
        </motion.div>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-3 py-1 text-xs font-mono bg-white/5 text-cyan-300 rounded-full mb-4 border border-white/10"
              >
                {project.projectType}
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                {project.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-300 max-w-3xl"
              >
                {project.briefDescription}
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {project.clientRepo && (
                <motion.a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-lg border border-white/10 transition-all group"
                >
                  <Terminal className="w-4 h-4 mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <span>Client Code</span>
                  <GitPullRequest className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              )}
              
              {project.serverRepo && (
                <motion.a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-lg border border-white/10 transition-all group"
                >
                  <Server className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span>Server Code</span>
                  <GitBranch className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              )}
              
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 rounded-lg transition-all group"
                >
                  <Globe className="w-4 h-4 mr-2 text-white" />
                  <span>View Deployment</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Image carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="mb-12 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <Carousel
            showArrows={true}
            showThumbs={true}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={6000}
            stopOnHover={true}
            emulateTouch={true}
            className="rounded-lg"
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <motion.button
                onClick={onClickHandler}
                disabled={!hasPrev}
                aria-label={label}
                className="absolute left-2 top-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </motion.button>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <motion.button
                onClick={onClickHandler}
                disabled={!hasNext}
                aria-label={label}
                className="absolute right-2 top-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.button>
            )}
          >
            {project.images.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-96 md:h-[32rem] relative"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            ))}
          </Carousel>
        </motion.div>

        {/* Tab navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex border-b border-white/10">
            {['features', 'technology', 'challenges'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium relative ${activeTab === tab ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="tabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'features' && (
              <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-12">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Key Features
                  </span>
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'technology' && (
              <div className="mb-12 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Technology Stack
                  </span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * index }}
                      whileHover={{ y: -3 }}
                      className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-cyan-300 border border-white/10 hover:border-cyan-400/30 transition-all"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-12">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Development Challenges
                  </span>
                </h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      </div>
                      <span>{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Gallery section */}
        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold text-white mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-lg overflow-hidden border border-white/10 group"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="w-full h-48 md:h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm">View {index % 2 === 0 ? 'Dashboard' : 'Mobile'} View</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 rounded-lg text-white font-medium transition-all group"
          >
            <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
            <span>Explore Other Projects</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;