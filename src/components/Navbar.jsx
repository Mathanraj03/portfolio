import React from 'react';
import resume from "../assets/Resume.pdf"
import { Link } from "react-scroll";

const Navbar = () => {

  const handelDownload = ()=>{

     const link = document.createElement("a");
          link.href = resume; 
          link.download = "MathanRaj_Resume.pdf"; 
          link.click();

  }

  return (
    <>
     <div className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
       <div className="max-w-5xl mx-auto flex justify-between items-center p-2">
          <h1 className="text-2xl px-3 font-bold">Portfolio</h1>
          <div className="space-x-4">
            <button onClick={handelDownload} className="text-sm bg-[var(--accent)] px-4 py-2 bg-primary rounded-full hover:bg-[var(--haccent)] transition">Download CV</button>
            <Link
              to="contact"  
              smooth={true}
              offset={-30} 
              duration={500}
              className=" cursor-pointer px-4 py-2 bg-primary text-white rounded-md text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
       </div>
    </>
  )
};

export default Navbar;
