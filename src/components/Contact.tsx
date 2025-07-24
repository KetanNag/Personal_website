import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8"
        >
          {personalInfo.contact.map((item, index) => (
            <a key={index} href={item.url} className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
              <item.icon className="h-6 w-6 mr-3" />
              {item.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
