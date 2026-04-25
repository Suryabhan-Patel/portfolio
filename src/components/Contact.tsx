import { motion } from 'framer-motion';
import { Mail, Code, ExternalLink, Briefcase } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'psuryabhan017@gmail.com',
      href: 'mailto:psuryabhan017@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Briefcase,
      label: 'LinkedIn',
      value: 'Suryabhan Patel',
      href: 'https://www.linkedin.com/in/suryabhan-patel-bb7270344/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      label: 'GitHub',
      value: '@suryabhan-patel',
      href: 'https://github.com/suryabhan-patel',
      color: 'from-gray-400 to-gray-600',
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
    <section id="contact" className="relative py-32 bg-[#030303] px-6 overflow-hidden">
      
      {/* Subtle Background Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-pink-900/10 blur-[150px] pointer-events-none" />
      
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
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] mt-8" />
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group relative bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_15px_40px_rgba(168,85,247,0.1)] overflow-hidden flex flex-col items-center text-center"
              >
                {/* Dynamic Top Border Glow on Hover */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  {/* Ambient Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full`} />
                  
                  <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-inner flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">
                    <Icon className="text-gray-400 group-hover:text-white transition-colors duration-500 w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors">{contact.label}</h3>
                <p className="text-gray-400 text-sm font-light tracking-wide break-all group-hover:text-gray-300 transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          {/* Premium Touch Badge */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-md text-sm md:text-base text-gray-300 font-medium tracking-wide shadow-sm">
              <span className="text-lg drop-shadow-md">🚀</span> Open to internships, collaborations, and exciting opportunities
            </span>
          </div>

          {/* Form Container */}
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Send Me a Message</h3>
            
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');

                const subject = encodeURIComponent(`Message from ${name}`);
                const body = encodeURIComponent(`${message}\n\n-------------------\nContact Email: ${email}`);

                window.location.href = `mailto:psuryabhan017@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-[#0a0a0a] border border-white/[0.05] rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.02] focus:shadow-[inset_0_0_20px_rgba(168,85,247,0.05)] transition-all duration-300"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-[#0a0a0a] border border-white/[0.05] rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.02] focus:shadow-[inset_0_0_20px_rgba(168,85,247,0.05)] transition-all duration-300"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="w-full px-5 py-4 bg-[#0a0a0a] border border-white/[0.05] rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.02] focus:shadow-[inset_0_0_20px_rgba(168,85,247,0.05)] transition-all duration-300 resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="relative group w-full px-6 py-4 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button Hover Shimmer */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="tracking-wide">Send Message</span>
                  <ExternalLink size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.button>
            </form>
          </div>
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