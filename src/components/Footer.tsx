import React from 'react';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            {personalInfo.socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
