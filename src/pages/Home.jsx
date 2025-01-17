import React from 'react'
import { motion } from 'framer-motion'


function Home() {

  const fadeAnimation={
    initial:{
      opacity:0,
      y:100
    },
    animate:{
      opacity:1,
      y:0
    }
  }

  return (    
      <div className='min-h-screen md:pt-16 pt-12'>
        <div className='text-center pt-20'>
          <motion.h1
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            transition={{ duration:0.5 }}
            className='md:text-4xl text-2xl text-gray-800 '
          >
            Hi, I'am <span className='font-semibold md:text-6xl text-3xl text-[#9b36fa]'>MATHANRAJ</span>
          </motion.h1>
          <motion.p
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            transition={{ delay: 0.2, duration:0.5 }}
            className='mx-auto max-w-2xl text-gray-500 py-6'
          >
           Full-Stack Developer with skills in Java, React, and Spring Boot. Eager to apply my knowledge in building scalable applications and contribute to team success.
          </motion.p>
          <motion.div
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            transition={{ delay: 0.3, duration:0.5 }}
            className='space-x-4 justify-center'
          >
            <a
              href="#project"
              className='bg-[#9b36fa] hover:bg-[#8707ff] text-gray-100 px-2 py-2 rounded-md'>
              View My Project
            </a>
            <a
              href="#contact"
              className='bg-[#9b36fa] hover:bg-[#8707ff] text-gray-100 px-2 py-2 rounded-md'>
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
  )
}

export default Home;
