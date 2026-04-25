import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function About() {
  const skills = [
    { category: 'Languages', items: ['Python', 'Java'] },
    { category: 'ML/AI', items: ['Machine Learning', 'Scikit-learn', 'Deep Learning'] },
    { category: 'Data', items: ['Pandas', 'NumPy', 'Data Analysis'] },
    { category: 'Backend', items: ['FastAPI', 'Streamlit', 'REST APIs'] },
  ];

  // Premium, fluid easing curve
  const customEase = "easeInOut";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  return (
    <section id="about" className="relative py-32 bg-[#030303] px-6 overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-900/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-16 mb-24 items-center"
        >
          {/* Bio Column */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              I'm a passionate <span className="text-gray-200 font-medium">AI/ML engineer</span> with a focus on building intelligent applications that solve real-world problems.
              My journey in data science and machine learning has equipped me with strong fundamentals in algorithms, statistical modeling, and <span className="text-gray-200 font-medium">Machine learning</span>.
            </p>
            <p>
              I love exploring cutting-edge technologies like LLMs and building full-stack AI solutions. When I'm not coding, you'll find me experimenting with new datasets or contributing to open-source projects.
            </p>
            
            {/* New Premium Subtitle Line */}
            <motion.div 
              className="inline-flex items-center gap-3 px-5 py-3 mt-4 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm w-fit shadow-sm"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              <span className="text-xl drop-shadow-md"></span>
              <span className="text-sm md:text-base text-gray-300 font-medium tracking-wide">
                Passionate about building real-world AI solutions
              </span>
            </motion.div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Projects', value: '5+' },
              { label: 'AI/ML Skills', value: '10+' },
              { label: 'Experience', value: 'Growing' },
              { label: 'Passion Level', value: '∞' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="group bg-white/[0.02] rounded-2xl p-8 text-center border border-white/[0.05] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase letter-spacing-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          <div className="mb-12 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Core Skills</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group bg-white/[0.02] rounded-2xl p-8 border border-white/[0.05] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-purple-500/40 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)] overflow-hidden"
                whileHover={{ y: -6 }}
              >
                {/* Top Border Hover Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h4 className="text-lg font-semibold text-gray-100 mb-6 group-hover:text-purple-400 transition-colors duration-300">
                  {skill.category}
                </h4>
                
                <ul className="space-y-4">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center group/item hover:text-gray-200 transition-colors duration-300">
                      {/* Modern glowing dot */}
                      <span className="w-1.5 h-1.5 bg-purple-500/40 group-hover/item:bg-pink-400 rounded-full mr-3 shadow-[0_0_8px_rgba(236,72,153,0)] group-hover/item:shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-300 group-hover/item:scale-150" />
                      <span className="font-light tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}