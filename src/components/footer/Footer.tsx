"use client";
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { BeatLoader } from 'react-spinners';
const Footer = () => {

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <footer className="bg-gray-900 text-white relative bottom-0 ">
            <div className='bg-gray-900  py-2 mx-auto w-full bottom-0'>
                <p className='text-[#5e5e5e] text-lg text-center'>© 2024 Jay Hanuman Aagao Traders. All Rights Reserved.</p>
            </div>
            <button
                onClick={scrollToTop}
                className="absolute top-[-30px] right-4 bg-blue-500 p-2 rounded-full text-white shadow-lg hover:bg-blue-600 transition-colors z-50"
                aria-label="Scroll to top"
            >
                {/* <FaArrowUp size={20} /> */}
                <MdKeyboardArrowUp className="text-white " size={40} />

            </button>

        </footer>
    );
};

export default Footer;
