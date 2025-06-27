import { Code, Cpu, Database, Globe, Server, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend', icon: Smartphone, items: ['React', 'Next.js', 'Tailwind', 'TypeScript'], color: 'text-purple-400' },
    { name: 'Backend', icon: Server, items: ['Node.js', 'Express', 'Python', 'Django'], color: 'text-cyan-400' },
    { name: 'Database', icon: Database, items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'], color: 'text-blue-400' },
    { name: 'DevOps', icon: Cpu, items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'], color: 'text-green-400' },
    { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'Swift'], color: 'text-yellow-400' },
    { name: 'Other', icon: Globe, items: ['GraphQL', 'Web3', 'Blockchain'], color: 'text-pink-400' },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-1/2 left-0 w-full h-[200%] bg-gradient-to-b from-gray-900/50 to-gray-950/80 backdrop-blur-lg -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #4F46E5 0%, transparent 40%)',
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 75% 75%, #06B6D4 0%, transparent 40%)',
        }}></div>
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
            ABOUT ME
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Crafting <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Digital Experiences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I specialize in building responsive, performant web applications with modern technologies. 
            With 5+ years of experience, I bridge the gap between design and technical implementation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glowing card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-40 -z-10"></div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">My Journey</h3>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  I started coding at 15, building simple websites for local businesses. 
                  What began as a hobby turned into a passion for solving complex problems through code.
                </p>
                <p>
                  Today, I help startups and enterprises transform their ideas into scalable digital products 
                  with clean, efficient architecture and intuitive interfaces.
                </p>
                <p className="border-l-4 border-cyan-500/50 pl-4 italic">
                  "I believe great software should be both powerful and delightful to use."
                </p>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-medium text-white mb-3">When I'm not coding:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      Open-source contributions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      Photography
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      Hiking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      Mechanical keyboards
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/5 transition-colors"
                
              >
                <div className={`w-10 h-10 rounded-lg mb-4 flex items-center justify-center ${skill.color.replace('text', 'bg')}/20`}>
                  <skill.icon className={`w-5 h-5 ${skill.color}`} />
                </div>
                <h3 className="font-bold text-white mb-2">{skill.name}</h3>
                <ul className="space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.color}`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative flex overflow-x-hidden">
            <div className="py-4 animate-marquee whitespace-nowrap">
              {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'Docker', 'AWS', 'Python', 'Flutter', 'Web3'].map((tech) => (
                <span key={tech} className="mx-8 text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {tech}
                </span>
              ))}
            </div>
            <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
              {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'Docker', 'AWS', 'Python', 'Flutter', 'Web3'].map((tech) => (
                <span key={tech} className="mx-8 text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;