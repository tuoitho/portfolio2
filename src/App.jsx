import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutActivity from './activities/AboutActivity';
import SkillsActivity from './activities/SkillsActivity';
import ProjectsActivity from './activities/ProjectsActivity';
import ContactActivity from './activities/ContactActivity';

function App() {
  const [currentTab, setCurrentTab] = useState('about');
  const [direction, setDirection] = useState(0);
  const tabs = ['about', 'skills', 'projects', 'contact'];

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const handleTabChange = (newTab) => {
    const currentIndex = tabs.indexOf(currentTab);
    const newIndex = tabs.indexOf(newTab);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentTab(newTab);
    
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={currentTab} setActiveTab={handleTabChange} />
      
      {/* Main Content with Animation */}
      <main className="relative overflow-hidden min-h-screen">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentTab}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="section-container"
          >
            {currentTab === 'about' && <Hero onNavigateToTab={handleTabChange} />}
            {currentTab === 'projects' && <ProjectsActivity />}
            {currentTab === 'skills' && <SkillsActivity />}
            {currentTab === 'contact' && <ContactActivity />}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}


export default App;
