import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, leadership } from '../data';

const About: React.FC = () => {
  const { icon: LeadershipIcon, title, items } = leadership;

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center">About Me</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300">
            {personalInfo.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center mb-8">
            <LeadershipIcon className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold ml-3">{title}</h3>
          </div>
          <div className="max-w-3xl mx-auto bg-white dark:bg-dark-card rounded-lg shadow-md p-6">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold text-lg">{item.organization} - {item.role}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</p>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
