import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  });

  return (
    <section id="home" className="relative pt-48 pb-32 flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-accent/10 text-accent text-sm font-bold px-4 py-1 rounded-full inline-block mb-4 border border-accent/30"
        >
          The Future of Frontend is Here
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
        >
          AI-Powered Frontend
          <br />
          from Design to Deployment
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400"
        >
          Dualite transforms your creative vision into high-performance applications at lightspeed. Let our AI handle the code, so you can focus on innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-lg font-bold rounded-full text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ring-offset-background transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_theme(colors.primary)]">
            Start Building for Free
          </a>
        </motion.div>
      </div>

      {/* Animated Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, type: 'spring' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10"
        style={{ top: '60%' }}
      >
        <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
          <div className="absolute inset-0 border-2 border-surface rounded-full animate-pulse"></div>
          <div className="absolute inset-8 border-2 border-surface rounded-full animate-pulse" style={{ animationDelay: '0.2s'}}></div>
          <div className="absolute inset-16 border-2 border-surface rounded-full animate-pulse" style={{ animationDelay: '0.4s'}}></div>
          
          <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="absolute top-[10%] left-1/2 -translate-x-1/2 p-4 bg-surface/50 rounded-full backdrop-blur-sm border border-gray-700">
            <Code className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="absolute bottom-[20%] left-[15%] p-4 bg-surface/50 rounded-full backdrop-blur-sm border border-gray-700">
            <Bot className="w-8 h-8 text-secondary" />
          </motion.div>
          <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="absolute bottom-[20%] right-[15%] p-4 bg-surface/50 rounded-full backdrop-blur-sm border border-gray-700">
            <Cloud className="w-8 h-8 text-accent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
