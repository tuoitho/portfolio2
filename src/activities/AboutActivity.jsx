import React from 'react';
import { motion } from 'framer-motion';
import { mockAboutData } from '../data/mockData';
import PaginatedAbout from '../components/PaginatedAbout';

const AboutActivity = () => {
  return (
    <main className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="section-container"
      >
        <PaginatedAbout aboutData={mockAboutData} />
      </motion.div>
    </main>
  );
};

export default AboutActivity;