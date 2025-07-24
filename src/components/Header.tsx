import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Testimonials', href: '#testimonials' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-lg border-b border-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
            Dualite
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
             <a href="#" className="inline-flex items-center px-6 py-2 bg-primary text-sm font-semibold rounded-full text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ring-offset-background transition-colors">
                Get Started
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-300 hover:bg-surface">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/80 backdrop-blur-lg"
          >
            <nav className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-surface"
                >
                  {link.name}
                </a>
              ))}
              <div className="p-3">
                  <a href="#" className="w-full inline-flex justify-center items-center px-4 py-2 bg-primary text-sm font-semibold rounded-full text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ring-offset-background transition-colors">
                      Get Started
                  </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
