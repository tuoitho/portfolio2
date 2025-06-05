import React from 'react';
import { motion } from 'framer-motion';
import { mockSkills } from '../data/mockData';
import PaginatedSkills from '../components/PaginatedSkills';

const SkillsActivity = () => {
  return (
    <main className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="section-container"
      >
        <PaginatedSkills skills={mockSkills} />
      </motion.div>
    </main>
  );
};

export default SkillsActivity;