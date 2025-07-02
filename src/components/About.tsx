// src/components/About.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../lib/motion';
import { SectionWrapper } from '@/components';
import { services } from '../constants'; // Your services/cards data
// ... import other necessary things like Tilt

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    // <Tilt className="xs:w-[250px] w-full"> // Assuming you use react-parallax-tilt
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // options={{ max: 45, scale: 1, speed: 450 }} // Tilt options
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    // </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Introduction</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("up", "tween", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled full-stack developer with experience in TypeScript, Python, and JavaScript, 
        and expertise in frameworks like React, Next.js, and Node.js. I'm a quick learner 
        and collaborate closely with clients to create efficient, scalable, and user-friendly 
        solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");