import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-primary">Ketan Nag</a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-2 p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-dark-card"
        >
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-white hover:bg-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
