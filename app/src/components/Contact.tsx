// src/components/Contact.tsx

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

// Reusable component for each contact item
function ContactItem({ 
  icon, 
  title, 
  text, 
  href 
}: { 
  icon: React.ReactNode, 
  title: string, 
  text: string, 
  href: string 
}) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
    >
      <div className="shrink-0 w-12 h-12 bg-gray-100 text-cyan-600 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-2">
            I'm open to discussing new projects, opportunities, or just to chat.
          </p>
        </div>

        {/* Contact Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactItem
            icon={<HiOutlineMail className="w-6 h-6" />}
            title="Email"
            text="favas78601@gmail.com"
            href="mailto:favas78601@gmail.com"
          />
          <ContactItem
            icon={<HiOutlinePhone className="w-6 h-6" />}
            title="Phone"
            text="+91 81570 50427"
            href="tel:+918157050427"
          />
          <ContactItem
            icon={<HiOutlineLocationMarker className="w-6 h-6" />}
            title="Location"
            text="Mannarkkad, India"
            href="#" // No link needed for location
          />
        </div>
        
        {/* Footer Divider & Socials */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Muhammed Favas.P. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://www.linkedin.com/in/muhammed-favas-431040238/" target="_blank"> {/* TODO: Add LinkedIn URL */}
              <FaLinkedin className="w-6 h-6 text-gray-500 hover:text-cyan-600 transition-colors" />
            </Link>
            <Link href="https://github.com/favas0786" target="_blank"> {/* TODO: Add GitHub URL */}
              <FaGithub className="w-6 h-6 text-gray-500 hover:text-cyan-600 transition-colors" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}