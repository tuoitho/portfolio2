import React from 'react';
import { motion } from 'framer-motion';
import { mockProjects } from '../data/mockData';
import PaginatedContent from '../components/PaginatedContent';
import { ProjectCard } from '../components/Projects'; // ProjectCard is a named export from Projects.jsx

const ProjectsActivity = () => {
  return (
    <main className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="section-container"
      >
        <div className="min-h-screen bg-gray-50 py-20">
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

            <PaginatedContent
              items={mockProjects}
              itemsPerPage={6}
              gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              renderItem={(project, index) => (
                <ProjectCard project={project} index={index} />
              )}
            />
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default ProjectsActivity;