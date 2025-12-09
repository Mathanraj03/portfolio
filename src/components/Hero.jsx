import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="py-10">
      <div className="section-wrapper text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <img
            src="https://framerusercontent.com/images/US4H03wWzQL7WszFG2uQIR16R0.png"
            alt="profile"
            className="mx-auto w-36 h-36 rounded-full border-4 border-[var(--accent)] object-cover"
          /> */}
          <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold">
            Mathanraj
          </h1>
          <p className="mt-3 text-lg text-[var(--muted)]">
            Software Developer 
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="projects"
              smooth={true}
              offset={-30} 
              duration={500}
              className=" cursor-pointer px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--haccent)] transition"
            >
              View Projects
            </Link>

            <Link
              to="contact"  
              smooth={true}
              offset={-30} 
              duration={500}
              className=" cursor-pointer px-6 py-3 rounded-lg border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
