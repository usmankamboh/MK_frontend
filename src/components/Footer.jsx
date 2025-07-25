import React from 'react';
import { assets } from "../assets/assets";
import OurPolicy from '../components/OurPolicy';

const Footer = () => {
  return (
    <div className="mt-40 text-sm">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        {/* Left Section - Logo and Description */}
        <div>
          <img src={assets.footer} alt="Company Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias nisi itaque repudiandae cum, harum esse, aliquam a dolor inventore enim quisquam fugit saepe explicabo exercitationem ad consectetur fuga doloribus.
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">
            <span style={{ color: '#FF4E50' }}>C</span>
            <span style={{ color: '#FC913A' }}>O</span>
            <span style={{ color: '#F9D62E' }}>M</span>
            <span style={{ color: '#7FDEFF' }}>P</span>
            <span style={{ color: '#45ADA8' }}>A</span>
            <span style={{ color: '#9DE0AD' }}>N</span>
            <span style={{ color: '#547980' }}>Y</span>
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/our-policy">Our Policy</a></li> {/* Use route or embed <OurPolicy /> in the main page */}
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">
            <span style={{ color: '#FF4E50' }}>G</span>
            <span style={{ color: '#9DE0AD' }}>E</span>
            <span style={{ color: '#FC913A' }}>T </span>
            <span style={{ color: '#F9D62E' }}>I</span>
            <span style={{ color: '#7FDEFF' }}>N </span>
            <span style={{ color: '#45ADA8' }}>TO</span>
            <span style={{ color: '#9DE0AD' }}>U</span>
            <span style={{ color: '#547980' }}>CH</span>
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92-323-4563965</li>
            <li>musman.saleem98@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300" />
      <p className="py-5 text-sm text-center text-gray-700">
        © 2025 MariaK.com. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
