// src/components/Hero.tsx

import Link from 'next/link';
import { HiLocationMarker, HiEye } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  return (
    // We add 'pt-16' to give space for the fixed navbar
    <section id="hero" className="bg-white min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Main flex container for two columns */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Column 1: Text Content */}
          <div className="md:w-1/2 text-center md:text-left animate-fadeIn">
            {/* Location */}
            <span className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-4">
              <HiLocationMarker className="w-5 h-5" />
              Mannarkkad, India
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Full-Stack (MERN) Developer
            </h1>

            {/* Subtitle / Description from PDF */}
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
              Self-taught and highly motivated MERN Stack Developer with a passion for building dynamic, real-time web applications.
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="#projects">
                <span className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <HiEye className="w-5 h-5" />
                  View Projects
                </span>
              </Link>
              <Link href="https://github.com" target="_blank"> {/* <-- TODO: Add your GitHub URL */}
                <span className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                  <FaGithub className="w-5 h-5" />
                  GitHub
                </span>
              </Link>
              <Link href="https://linkedin.com" target="_blank"> {/* <-- TODO: Add your LinkedIn URL */}
                <span className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                  <FaLinkedin className="w-5 h-5" />
                  LinkedIn
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="md:w-1/2 flex justify-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="w-80 h-80 md:w-96 md:h-96 relative">
              
              {/* === THIS IS THE FIXED IMAGE COMPONENT === */}
              <Image
                src="/profile-pic.JPG" // Make sure this path is correct in /public
                alt="Muhammed Favas"
                fill
                priority // Fixes LCP warning
                sizes="(max-width: 768px) 20rem, 24rem" // Fixes sizes warning
                className="rounded-3xl shadow-xl object-cover" // Added object-cover
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}