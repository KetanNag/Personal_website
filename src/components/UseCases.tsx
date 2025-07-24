import React from 'react';
import { motion } from 'framer-motion';
import { useCases } from './dualite-data';

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Built for Any Challenge</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            From simple landing pages to complex enterprise systems, Dualite adapts to your needs.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-thin scrollbar-thumb-surface scrollbar-track-transparent">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 bg-surface rounded-2xl shadow-lg overflow-hidden border border-gray-800/50 group"
              >
                <img src={useCase.imageUrl} alt={useCase.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  <p className="mt-2 text-base text-gray-400">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
