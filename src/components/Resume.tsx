import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FileDown, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    // Create a link element and trigger download
    // This would point to your actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with actual path
    link.download = 'Suryabhan_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Certificate Data
  const certifications = [
    {
      title: 'Apply AI: Analyze Customer Reviews',
      org: 'Cisco Networking Academy',
      date: 'Apr 2026',
      link: 'https://drive.google.com/file/d/1fugjQk_Xysoc4uAJK-pjL4-HLygZQH52/view?usp=drive_link', // Placeholder link
    },
    {
      title: 'CCNA: Introduction to Networks',
      org: 'Cisco Networking Academy',
      date: 'Apr 2026',
      link: 'https://drive.google.com/file/d/1LKqfEsdUcPLLcst_pX_cCgbXjQP1dqmL/view?usp=drive_link', // Placeholder link
    },
    {
      title: 'Introduction to Modern AI',
      org: 'Cisco Networking Academy',
      date: 'Apr 2026',
      link: 'https://drive.google.com/file/d/1vCQvgEl0slfOecJ15EmF35pQJWxshDld/view?usp=drive_link', // Placeholder link
    },
    {
      title: 'Data Science Essentials with Python',
      org: 'Cisco Networking Academy',
      date: 'Jan 2026',
      link: 'https://drive.google.com/file/d/1UpbYq4nxujR1Q4nOCgwrdut4_xGsWJ1b/view?usp=drive_link', // Placeholder link
    },
    {
      title: 'Introduction to Data Science',
      org: 'Cisco Networking Academy',
      date: 'Dec 2025',
      link: 'https://drive.google.com/file/d/1eOvFy5TU8czI8gGytWBIT7M33ITFOYLe/view?usp=drive_link', // Placeholder link
    },
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
    hidden: { opacity: 0, x: -30, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  return (
    <section id="resume" className="relative py-32 bg-[#030303] px-6 overflow-hidden">
      
      {/* Subtle Background Orbs */}
      <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[40%] rounded-full bg-pink-900/10 blur-[150px] pointer-events-none" />
      
      {/* Grid Overlay for depth */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Resume
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
        </motion.div>

        {/* Resume Content - 2 Column Grid for Timelines */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24"
        >
          {/* Left Column: Education */}
          <motion.div variants={containerVariants}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] shadow-[0_0_15px_rgba(168,85,247,0.15)] flex items-center justify-center backdrop-blur-md">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 tracking-tight">Education</h3>
            </div>
            
            {/* Custom Timeline */}
            <div className="relative border-l border-white/10 ml-6 space-y-10">
              {[
                {
                  title: 'B.Tech / BE in Computer Science',
                  institution: 'Medicaps University',
                  year: '2023 - Present',
                  score: 'CGPA 8.9',
                  details: 'Focus on AI/ML, Data Science, and Software Development',
                },
                {
                  title: 'Senior Secondary (Class 12)',
                  institution: 'CBSE Board (Beersheba International School, Pipariya)',
                  year: '2023',
                  score: '87%',
                  details: (
                    <>
                      Specialized in Science stream (Physics, Chemistry, Mathematics). Built strong foundation in analytical and problem-solving skills.
                    </>
                  ),
                },
                {
                  title: 'Secondary School (Class 10)',
                  institution: 'CBSE Board (Beersheba International School, Pipariya)',
                  year: '2021',
                  score: '86%',
                  details: (
                    <>
                      Developed strong academic base across core subjects.
                    </>
                  ),
                },
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-10 group"
                >
                  {/* Glowing Timeline Dot */}
                  <span className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.8)] group-hover:scale-150 transition-transform duration-300" />
                  
                  {/* Glassmorphism Card */}
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] hover:-translate-y-1">
                    <h4 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-purple-300 transition-colors">{edu.title}</h4>
                    <p className="text-purple-400 font-medium mb-3">{edu.institution}</p>
                    
                    {/* Inline Flexbox for Year + Percentage/CGPA */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-block px-3 py-1 bg-white/[0.03] rounded-full border border-white/[0.05] text-gray-400 text-xs font-mono tracking-wide">
                        {edu.year}
                      </div>
                      <span className="text-purple-400 font-semibold text-sm tracking-wide">
                        {edu.score}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed font-light">{edu.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Internships */}
          <motion.div variants={containerVariants}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] shadow-[0_0_15px_rgba(236,72,153,0.15)] flex items-center justify-center backdrop-blur-md">
                <Briefcase className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 tracking-tight">Internships</h3>
            </div>
            
            {/* Custom Timeline */}
            <div className="relative border-l border-white/10 ml-6 space-y-10">
              {[
                {
                  title: 'Data Engineering Intern',
                  company: 'AWS Academy + EduSkills + AICTE',
                  year: 'Jan 2026 - Mar 2026',
                  details: 'Architected scalable data pipelines and mastered cloud-based processing tools. Gained practical expertise in modern data engineering fundamentals.',
                  tag: 'Virtual Internship',
                  isRecent: true,
                  link: 'https://drive.google.com/file/d/1JOhbPG62SIGsYhpIdQtRuv1GN9RHBCTv/view?usp=drive_link', // Placeholder link
                },
                {
                  title: 'AI/ML Virtual Intern',
                  company: 'Google for Developers + EduSkills + AICTE',
                  year: 'Oct 2025 - Dec 2025',
                  details: 'Developed and deployed machine learning models for real-world applications. Mastered end-to-end ML workflows and advanced problem-solving techniques.',
                  tag: 'Certified Internship',
                  isRecent: false,
                  link: 'https://drive.google.com/file/d/1fugjQk_Xysoc4uAJK-pjL4-HLygZQH52/view?usp=drive_link', // Placeholder link
                },
              ].map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-10 group"
                >
                  {/* Glowing Timeline Dot */}
                  <span className={`absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-500 transition-transform duration-300 group-hover:scale-150 ${exp.isRecent ? 'shadow-[0_0_15px_rgba(236,72,153,0.9)] scale-125' : 'shadow-[0_0_12px_rgba(168,85,247,0.8)]'}`} />
                  
                  {/* Glassmorphism Card */}
                  <div className={`rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 flex flex-col ${exp.isRecent ? 'bg-white/[0.03] border border-pink-500/30 shadow-[0_10px_30px_rgba(236,72,153,0.1)] hover:bg-white/[0.05] hover:border-pink-400/50' : 'bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]'}`}>
                    <h4 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-pink-300 transition-colors">{exp.title}</h4>
                    <p className="text-pink-400 font-medium mb-3">{exp.company}</p>
                    
                    {/* Certification Badge */}
                    <p className="text-xs text-pink-500/80 font-semibold uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <span className="text-pink-400">✔</span> Certified by AICTE & Industry Partners
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="inline-block px-3 py-1 bg-white/[0.03] rounded-full border border-white/[0.05] text-gray-400 text-xs font-mono tracking-wide">
                        {exp.year}
                      </div>
                      <span className="text-[10px] uppercase bg-pink-500/10 text-pink-300 px-2.5 py-1 rounded-full border border-pink-500/20 font-semibold tracking-wider">
                        {exp.tag}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">{exp.details}</p>

                    {/* NEW: View Certificate Link */}
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-auto inline-flex items-center text-sm font-medium text-purple-400 hover:text-pink-400 transition-colors group/link w-fit"
                    >
                      View Certificate <span className="ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications Grid Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-24"
        >
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] shadow-[0_0_15px_rgba(168,85,247,0.15)] flex items-center justify-center backdrop-blur-md">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 tracking-tight">Certifications</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                {/* Top border glow on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-100 mb-3 group-hover:text-purple-300 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {cert.org}
                  </p>
                </div>
                
                {/* Bottom Row: Date Pill & Link aligned via flexbox */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="inline-block px-3 py-1 bg-white/[0.03] rounded-full border border-white/[0.05] text-gray-400 text-xs font-mono tracking-wide w-fit">
                    {cert.date}
                  </div>
                  
                  {/* NEW: View Certificate Link */}
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    View <span className="ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Section Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center justify-center pt-8 border-t border-white/[0.05]"
        >
          {/* Subtle Premium Text */}
          <p className="text-gray-400 text-sm md:text-base font-light mb-6 flex items-center gap-2 bg-white/[0.02] py-2 px-4 rounded-full border border-white/[0.05]">
            <span className="opacity-80">📄</span> Download my complete resume for detailed experience
          </p>

          {/* Premium Download Button */}
          <motion.button
            onClick={handleDownload}
            className="relative group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Button Hover Shimmer */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
            
            <FileDown size={20} className="relative z-10 group-hover:-translate-y-0.5 transition-transform" />
            <span className="relative z-10 tracking-wide">Download Resume</span>
          </motion.button>
        </motion.div>

        {/* Additional Info Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Certifications', value: '5+ Verified' },
            { label: 'Open Source', value: 'Contributing' },
            { label: 'Learning', value: 'Advanced LLMs' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statVariants}
              className="relative p-8 bg-white/[0.01] rounded-2xl border border-white/[0.05] backdrop-blur-sm transition-all duration-500 text-center overflow-hidden hover:bg-white/[0.03] hover:border-purple-500/30 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.1)] group"
            >
              {/* Top border glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <p className="text-gray-400 text-sm uppercase tracking-wider font-medium mb-3 group-hover:text-gray-300 transition-colors">{stat.label}</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Required style for shimmer effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}