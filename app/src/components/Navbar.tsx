// src/components/Navbar.tsx

import Link from 'next/link';
import { HiCode, HiDownload } from 'react-icons/hi'; // Importing icons

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/">
            <span className="flex items-center gap-2 text-xl font-bold cursor-pointer">
              <HiCode className="w-6 h-6 text-cyan-600" />
              {/* This is the changed part ↓ */}
              <span className="text-gray-800">Muhammed · Portfolio</span>
            </span>
          </Link>

          {/* Main Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about">
              <span className="text-gray-600 hover:text-cyan-600 transition-colors">About</span>
            </Link>
            <Link href="#skills">
              <span className="text-gray-600 hover:text-cyan-600 transition-colors">Skills</span>
            </Link>
            <Link href="#projects">
              <span className="text-gray-600 hover:text-cyan-600 transition-colors">Projects</span>
            </Link>
            <Link href="#contact">
              <span className="text-gray-600 hover:text-cyan-600 transition-colors">Contact</span>
            </Link>
            
            {/* Resume Button */}
            <Link href="/Muhammed Favas Mern.pdf" target="_blank" passHref>
              <span className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition-colors cursor-pointer">
                <HiDownload className="w-5 h-5" />
                Resume
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}