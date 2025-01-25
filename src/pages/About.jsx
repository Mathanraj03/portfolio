import React from 'react'
import { motion } from 'framer-motion';


function About() {

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Spring-Boot', 'MySQL', 'git/github']

  const handelDownload = () => {
    const link = document.createElement('a');
    link.href = "/cv/Resume.pdf";
    link.target = '_blank';
    link.download = 'Resume.pdf';
    link.click();
  }

  const fadeAnimation = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  }

  return (
    <div className='min-h-screen text-center'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
      <motion.h1
      variants={fadeAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }} 
      className='text-4xl font-bold'>
        About
      </motion.h1>
      <div className='py-4'>
        <div className='max-w-3xl mx-auto text-gray-600'>
          <motion.p
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='text-[16px] '>
            Hi, I am Mathanraj, a passionate Java Full-Stack Developer with skills in building dynamic web applications using React, java, Spring Boot, and MySQL.I enjoy building responsive, user-friendly web applications and am excited to find an entry-level opportunity to grow my skills.
          </motion.p>
        </div>
        <motion.div 
          variants={fadeAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='py-8'>
        <button onClick={handelDownload} className='bg-[#9b36fa] text-gray-100 px-2 py-2 rounded-md '>Download CV</button>
        </motion.div>
        <motion.h1 
          variants={fadeAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='text-xl font-bold text-gray-900 py-3 ' >
            Skills
          </motion.h1>
        <div className='max-w-5xl mx-auto p-8 grid grid-cols-2 md:grid-cols-4 gap-4 '>
          {skills.map((skill, index) =>
            <motion.div
              key={index}
              variants={fadeAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.3 * (index + 1), duration: 0.5 }}
              className='bg-gray-200 rounded-lg p-3 text-center ' >
              <span className='text-center font-semibold' >
                {skill}
              </span>
            </motion.div>
          )}
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default About;

