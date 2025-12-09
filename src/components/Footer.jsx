import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.03)]">
      <div className="p-4 section-wrapper max-w-6xl mx-auto text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mathanraj - Built with React & Tailwind
      </div>
    </footer>
  );
};

export default Footer;
