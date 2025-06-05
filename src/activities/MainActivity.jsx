import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NavigationTabs from '../components/NavigationTabs';
import Footer from '../components/Footer';

const MainActivity = () => {
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
    scrollToSection(newTab);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={currentTab} setActiveTab={handleTabChange} />
      <Hero onNavigateToTab={handleTabChange} />
      <NavigationTabs activeTab={currentTab} setActiveTab={handleTabChange} />
      <Footer />
    </div>
  );
};

export default MainActivity;