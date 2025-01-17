import React from 'react'
import { animate, delay, easeInOut, motion } from 'framer-motion'



function Project() {

const fadeAnimation={
  initial:{
    opacity:0,
    y:100
  },
  animate:{
    opacity:1,
    y:0,
  }
};

  const projectItems=[
    {
      title:'Portfolio',
      description:'A responsive and modern web application built using React and Vite, styled with Tailwind CSS for sleek design, and powered by JavaScript for dynamic functionality. This project showcases seamless performance, reusable components, and interactive UI for a portfolio website.',
      image:(new URL("../assets/images/project1.jpg",import.meta.url).href),
      technology:['React'],
      link:'#'
    },
    {
      title:'E-Commerce',
      description:'A full-stack e-commerce application built using Spring Boot and Java for the backend, MySQL for the database, and React for the frontend. This platform enables users to browse, search, and purchase products while providing an intuitive interface and secure payment integration.',
      image:(new URL("../assets/images/project2.jpg",import.meta.url).href),
      technology:['React','Spring-boot','Java','MySql'],
      link:'#'
    },
  ]

  return (
    <div className='min-h-screen'>
      <motion.h1 
          variants={fadeAnimation}
          initial="initial"
          whileInView="animate"
          transition={{ duration:0.7}}
          viewport={{once:true}}
          className='text-center font-bold text-4xl py-16 '>
             Projects
        </motion.h1>
      <div className='grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectItems.map(( project, index ) =>
          <motion.div
           key={index}
           variants={fadeAnimation}
           initial="initial"
           whileInView="animate"
           transition={{delay:0.2*(index+1), duration:0.7}}
          //  viewport={{once:true}}
           className='max-w-xl mx-auto'>
            <div className='px-2 py-4 bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-xl hover:scale-105 duration-300'>
            <img src={project.image} alt={project.title} className=' h-48 rounded-xl' />
            <div className='p-4'>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              {project.title}
            </h3>
            <p className='text-gray-600 mb-4'>
              {project.description}
            </p>
            <div className='flex flex-wrap gap-2 mb-4 pb-4'>
            {project.technology.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
            </div>
            <a href={project.link} className='bg-[#9b36fa] hover:bg-[#8707ff] justify-center text-gray-100 py-2 px-2 rounded-md '>
              view my work
            </a>
            </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Project;
