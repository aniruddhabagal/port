// src/components/hoc/SectionWrapper.tsx
'use client';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion'; // We will create this utils file

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
           
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;