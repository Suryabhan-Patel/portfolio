import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Code, href: 'https://github.com/suryabhan-patel', label: 'GitHub' },
    { icon: Briefcase, href: 'https://www.linkedin.com/in/suryabhan-patel-bb7270344/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:psuryabhan017@gmail.com', label: 'Email' },
  ];

  // Premium, fluid easing curve to match other sections
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <footer className="relative bg-[#030303] pt-20 pb-10 px-6 overflow-hidden border-t border-white/[0.05]">
      
      {/* Subtle Background Orbs */}
      <div className="absolute top-0 left-[10%] w-[30%] h-[100%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-[10%] w-[30%] h-[100%] rounded-full bg-pink-900/10 blur-[150px] pointer-events-none" />
      
      {/* Grid Overlay for depth */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <motion.h3 
              className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent mb-3 tracking-tight inline-block pb-1"
              animate={{ backgroundPosition: ['0%', '200%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              Suryabhan Patel
            </motion.h3>
            <p className="text-gray-400 text-base font-light leading-relaxed mb-6 max-w-sm">
              Aspiring AI/ML Engineer & Data Science Enthusiast
            </p>
            
            {/* Premium Touch Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm text-xs md:text-sm text-gray-300 font-medium tracking-wide shadow-sm">
              <span className="text-base drop-shadow-md">🚀</span> 
              Designed & Built with passion for AI and innovation
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:ml-auto"
          >
            <h4 className="text-gray-100 font-bold mb-6 tracking-wide text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-4">
              {['About', 'Projects', 'Resume', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="group relative text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium w-fit tracking-wide"
                  whileHover={{ x: 5 }}
                >
                  {link}
                  {/* Animated glowing underline on hover */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:ml-auto"
          >
            <h4 className="text-gray-100 font-bold mb-6 tracking-wide text-lg">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-purple-300 transition-all duration-300 hover:bg-white/[0.05] hover:border-purple-500/30 hover:shadow-[0_10px_20px_rgba(168,85,247,0.2)] backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative w-full h-px mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-[2px] opacity-70" />
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: customEase, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-light"
        >
          <p className="flex items-center gap-1.5">
            Made with 
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Heart size={16} className="text-pink-500 fill-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]" />
            </motion.span> 
            by <span className="text-gray-200 font-medium tracking-wide">Suryabhan Patel</span>
          </p>
          <p className="tracking-wide">© {currentYear} All rights reserved.</p>
        </motion.div>

      </div>
    </footer>
  );
}