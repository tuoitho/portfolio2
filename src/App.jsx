import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NavigationTabs from './components/NavigationTabs';
import PaginatedAbout from './components/PaginatedAbout';
import PaginatedSkills from './components/PaginatedSkills';
import PaginatedContact from './components/PaginatedContact';
import PaginatedContent from './components/PaginatedContent';
import Footer from './components/Footer';

// Import mock data
import { 
  mockProjects, 
  mockSkills, 
  mockAboutData, 
  mockContactInfo 
} from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderTabContent = () => {
    const contentVariants = {
      enter: {
        opacity: 0,
        y: 20,
      },
      center: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: -20,
      }
    };

    const transition = {
      type: "tween",
      ease: "easeInOut",
      duration: 0.3
    };

    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            key="about"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            <PaginatedAbout aboutData={mockAboutData} />
          </motion.div>
        );
      
      case 'projects':
        return (
          <motion.div
            key="projects"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
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
        );
      
      case 'skills':
        return (
          <motion.div
            key="skills"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            <PaginatedSkills skills={mockSkills} />
          </motion.div>
        );
      
      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            <PaginatedContact contactInfo={mockContactInfo} />
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Always visible */}
      <Hero onNavigateToTab={setActiveTab} />
      
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content with Animation */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

// ProjectCard component for reuse
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
            <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {project.category}
          </span>
          <div className="flex items-center text-xs text-gray-500">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
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

export default App;
