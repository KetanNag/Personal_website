import React from 'react';
import { motion } from 'framer-motion';
import { education, experience } from '../data';

const TimelineItem: React.FC<{ item: any; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative">
    <div className="hidden md:block absolute w-px h-full bg-gray-300 dark:bg-gray-600 top-2 left-5"></div>
    <div className="flex items-start">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white z-10">
        {item.role ? <experience.icon className="w-5 h-5" /> : <education.icon className="w-5 h-5" />}
      </div>
      <div className="ml-6">
        <h4 className="font-bold text-lg">{item.role || item.degree}</h4>
        <p className="font-medium text-primary">{item.company || item.institution}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 my-1">{item.duration} {item.location && `• ${item.location}`}</p>
        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
      </div>
    </div>
    {!isLast && <div className="h-12 md:h-16"></div>}
  </div>
);

const Experience: React.FC = () => {
  const timelineItems = [...experience.items, ...education.items];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center">Career & Education</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300">
            My professional journey and academic background.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === timelineItems.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
