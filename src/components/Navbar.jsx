import React, { useState } from 'react'
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";



function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handelDownload = () => {
    const link = document.createElement('a');
    link.href = new URL("../assets/cv/Resume.pdf", import.meta.url).href;
    link.target = "_blank";
    link.download = "Resume.pdf";
    link.click();
  }

  const navitem = [
    { lable: 'Home', path: '#home' },
    { lable: 'About', path: '#about' },
    { lable: 'Project', path: '#project' },
    { lable: 'Contact', path: '#contact' },
  ]


  return (
    <nav className='fixed w-full z-10 bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center md:h-16 h-12 '>

          <a href="#home"
            className='font-semibold hover:text-[#9b36fa] '
          >
            Portfolio
          </a>

          <div className='space-x-4 hidden md:block'>
            {navitem.map((item) => (
              <a key={item.path}
                href={item.path}
                className='inline-block group hover:text-[#9b36fa]'
              >
                {item.lable}
                <span className='block h-1 rounded-md w-full scale-x-0 bg-[#9b36fa] origin-center duration-300 ease-in-out group-hover:scale-x-100'></span>
              </a>
            )
            )}
            <button onClick={handelDownload} 
              className='bg-[#9b36fa] hover:bg-[#8707ff] text-gray-100 px-2 py-2 rounded-md '>
                Download CV
            </button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden '
          >{isOpen ? <IoCloseOutline className='h-6 w-6' /> : <IoMenuOutline className='w-6 h-6' />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='flex flex-col items-center pb-4 md:hidden'>
          {navitem.map((item) =>
            <a href={item.path}
              onClick={() => setIsOpen(false)}
              className='py-0.5'
            >{item.lable}</a>
          )}
          <button onClick={handelDownload} 
            className='bg-[#9b36fa] hover:bg-[#8707ff] text-gray-100 px-2 py-2 rounded-md '>
            Download CV
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
