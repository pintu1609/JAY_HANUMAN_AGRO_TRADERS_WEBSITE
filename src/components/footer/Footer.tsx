import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="py-3 mx-auto w-full">
        <p className="text-[#5e5e5e] text-sm md:text-base text-center">
          © 2025 Jay Hanuman Aagao Traders. All Rights Reserved.{" "}
          <span className="mx-2">|</span>
          Developed by{" "}
          <a
            href="https://vimarsha-invotech.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Vimarsha Invotech
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
