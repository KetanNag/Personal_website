import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-lg md:text-xl text-primary font-medium"
        >
          {personalInfo.title}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-300"
        >
          Based in {personalInfo.location}, I build beautiful and functional web applications.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex justify-center items-center space-x-4"
        >
          {personalInfo.socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
        >
            <a href="/ketan-nag-resume.pdf" download className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <Download className="mr-2 -ml-1 h-5 w-5" />
                Download CV
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
