import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from './dualite-data';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-surface/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Loved by Developers Worldwide</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8 rounded-2xl shadow-lg border border-gray-800/50 flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-current" />)}
              </div>
              <blockquote className="text-gray-300 flex-grow">"{testimonial.quote}"</blockquote>
              <footer className="mt-6">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </footer>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
            <div className="inline-block bg-surface p-8 rounded-2xl shadow-lg border border-gray-800/50 animate-subtle-glow">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">10,000+</p>
                <p className="mt-2 text-lg text-gray-300">Developers Building with Dualite</p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
