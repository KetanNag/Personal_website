import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center">Technical Skills</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300">
            The technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <skillCategory.icon className="h-7 w-7 text-primary" />
                <h3 className="text-xl font-bold ml-3">{skillCategory.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
