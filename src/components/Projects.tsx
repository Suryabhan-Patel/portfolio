import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Mehedpadosi',
      description: 'Advanced ML crop prediction system with 98% accuracy. Uses ensemble learning techniques to predict crop yields and provide agricultural insights.',
      tech: ['Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
      github: 'https://github.com/Suryabhan-Patel/mehedpadosi.git',
      demo: 'https://mehedpadosi-4hp6tzwsuvyxefkrsbdivp.streamlit.app/',
    },
    {
      title: 'AI Career Mentor',
      description: 'An intelligent career recommendation system powered by FAISS vector database and Google Gemini API. Provides personalized career guidance based on user skills and aspirations.',
      tech: ['Python', 'FAISS', 'Gemini API', 'FastAPI'],
      github: 'https://github.com/Suryabhan-Patel/ai-career-mentor',
    },
    {
      title: 'Netflix Data Analysis',
      description: 'Comprehensive data analysis and visualization of Netflix content. Reveals trends in content distribution, genres, and viewing patterns.',
      tech: ['Data Analysis', 'Matplotlib', 'Seaborn', 'Pandas'],
      github: 'https://github.com/Suryabhan-Patel/Netflix-Data-Analysis',
    },
    {
      title: 'Student Marks Predictor',
      description: 'Regression model predicting student performance based on study hours and historical data. Includes data preprocessing and model optimization.',
      tech: ['Linear Regression', 'Scikit-learn', 'Python', 'Statistics'],
      github: 'https://github.com/Suryabhan-Patel/predicting_marks_ML',
    },
  ];

  // Premium, fluid easing curve
  const customEase = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  return (
    <section id="projects" className="relative py-32 bg-[#030303] px-6 overflow-hidden">
      
      {/* Subtle Background Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-pink-900/10 blur-[150px] pointer-events-none" />

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
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              // Dynamically apply highlight classes to the first project
              className={`group relative flex flex-col rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] ${
                idx === 0 
                  ? 'bg-white/[0.04] border border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:bg-white/[0.06] hover:border-purple-400/60' 
                  : 'bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] hover:border-purple-500/30'
              }`}
            >
              
              {/* Top Visual Area (Abstract Mesh Gradient) */}
              <div className="relative h-48 md:h-56 w-full overflow-hidden bg-[#0a0a0a]">
                {/* Abstract background gradient - slightly more vibrant for the highlighted project */}
                <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700 ${idx === 0 ? 'from-purple-800/40' : 'from-purple-900/30'}`} />
                <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700 ${idx === 0 ? 'from-pink-800/30' : 'from-pink-900/20'}`} />
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />

                {/* Animated "Live App" Indicator for Mehedpadosi */}
                {idx === 0 && (
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 bg-purple-500/20 border border-purple-500/40 backdrop-blur-md rounded-full flex items-center gap-2.5 shadow-lg z-10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-purple-100 tracking-wide">Live App</span>
                  </div>
                )}
              </div>

              {/* Card Content Structure */}
              <div className="flex flex-col flex-grow p-8">
                
                {/* Title & Description */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 w-fit">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 cursor-default ${
                        idx === 0 
                          ? 'bg-purple-500/10 text-purple-200 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40' 
                          : 'bg-white/[0.03] text-gray-300 border-white/[0.05] hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Subtle Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-6" />

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.02] border border-white/[0.1] hover:bg-white/[0.08] hover:border-white/[0.2] text-gray-300 hover:text-white rounded-xl transition-all duration-300 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Code size={18} className="text-gray-400 group-hover/btn:text-white transition-colors" />
                    <span className="text-sm font-semibold tracking-wide">Code</span>
                  </motion.a>

                  {/* Conditionally render Demo button only if the link exists */}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 relative flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl overflow-hidden group/demo shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300" />
                      <ExternalLink size={18} className="relative z-10" />
                      <span className="relative z-10 text-sm font-semibold tracking-wide">Demo</span>
                    </motion.a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tailwind configuration for the shimmer animation (Add this to your globals.css or tailwind.config if you want the shimmer to work perfectly) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}