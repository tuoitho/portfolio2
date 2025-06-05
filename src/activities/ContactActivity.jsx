import React from 'react';
import { motion } from 'framer-motion';
import { mockContactInfo } from '../data/mockData';
import PaginatedContact from '../components/PaginatedContact';

const ContactActivity = () => {
  return (
    <main className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="section-container"
      >
        <PaginatedContact contactInfo={mockContactInfo} />
      </motion.div>
    </main>
  );
};

export default ContactActivity;