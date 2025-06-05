import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <Github size={16} className="text-gray-700" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <ExternalLink size={16} className="text-gray-700" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {project.category}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar size={12} className="mr-1" />
            {project.year}
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Xem demo →
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Source code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const PaginatedProjects = ({ projects }) => {
  return (    <div id="projects" className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Dự án của tôi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Khám phá các dự án tôi đã thực hiện với nhiều công nghệ hiện đại
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginatedProjects;
