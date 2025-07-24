import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-base flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 bg-gray-50 dark:bg-gray-700/50">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-primary-hover flex items-center">
          View on GitHub <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-center">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300">
            A selection of projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
