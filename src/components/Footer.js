// components/Footer.js
"use client";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Section: Logo and Brief Description */}
      <div className="flex flex-col items-start">
        <Image
          src="/Asset2.png"
          alt="Company Logo"
          width={120}
          height={30}
          priority
          className="mb-4"
        />
        <p className="text-sm">
          We are a creative agency dedicated to delivering innovative solutions.
          Let's collaborate and create something amazing together.
        </p>
      </div>
  
      {/* Center Section: Let’s Work Together and Contact Us Button */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
        <a href='/contact' className="bg-[#EE680F] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity duration-300">
          CONTACT US
        </a>
      </div>
  
      {/* Right Section: Socials and Company Links */}
      <div className="flex flex-col md:items-end space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Socials</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    {/* Bottom Section */}
    <div className="mt-12 border-t border-gray-700 pt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} SEREZ CREATIVES. All Rights Reserved.</p>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
  );
}
