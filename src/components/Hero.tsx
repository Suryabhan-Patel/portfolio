import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Ultra-smooth easing curve for that premium feel
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
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: customEase },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#030303] flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      
      {/* Premium Background Effects - Softer, larger glowing orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">
        
        {/* Left Column: Text Content */}
        <motion.div
          className="w-full lg:w-[55%] text-center lg:text-left flex flex-col items-center lg:items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Role Badge (Glassmorphism) */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] shadow-[0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-gray-300 tracking-wide">
                Aspiring AI/ML Engineer
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-white drop-shadow-sm">Suryabhan </span>
              {/* Shimmering Gradient Text */}
              <motion.span
                className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent pb-2"
                animate={{ backgroundPosition: ['0%', '200%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                Patel
              </motion.span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl font-medium text-gray-200 mb-6 max-w-2xl mx-auto lg:mx-0"
          >
            Building AI-powered applications using Python, ML & FastAPI
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Passionate about machine learning and creating intelligent solutions. Experienced in data science, Machine learning, and full-stack AI development.
          </motion.p>

          {/* NEW: Credibility Line */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-sm text-gray-500 font-medium flex items-center gap-2 justify-center lg:justify-start bg-white/[0.01] py-1.5 px-3 rounded-lg w-fit mx-auto lg:mx-0 border border-white/[0.02]">
              <span className="text-base"></span> Built multiple AI/ML projects with real-world applications
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full"
          >
            {/* Primary Button */}
            <motion.button
              onClick={() => handleScroll('#projects')}
              className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute inset-0 bg-white/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
              <span className="relative z-10 drop-shadow-md">View Projects</span>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              onClick={() => handleScroll('#contact')}
              className="px-8 py-4 bg-transparent border border-white/10 text-gray-300 font-semibold rounded-full backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: customEase, delay: 0.2 }}
        >
          <div className="relative group w-full max-w-[320px] md:max-w-[400px] aspect-[4/5]">
            {/* Animated Deep Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-700 ease-in-out opacity-60 group-hover:opacity-100 group-hover:from-purple-600/30 group-hover:to-pink-600/30" />
            
            {/* Outer Glass Wrapper */}
            <div className="relative h-full w-full rounded-[2rem] border border-white/[0.08] bg-white/[0.01] p-2 backdrop-blur-xl shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]">
              
              {/* Inner Image Container */}
              <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden bg-[#0a0a0a]">
                <img
                  src="/profile.png"
                  alt="Suryabhan Patel"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Subtle base gradient for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
              </div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.button
          onClick={() => handleScroll('#about')}
          className="p-3 rounded-full bg-white/[0.02] border border-white/[0.05] text-gray-500 hover:text-purple-400 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all backdrop-blur-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>

    </section>
  );
}