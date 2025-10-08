'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialItems = [
    { icon: <FaGithub size={40} />, href: 'https://github.com/digitalmustiii', label: 'GitHub' },
    { icon: <FaLinkedin size={40} />, href: 'https://linkedin.com/in/sbmustapha', label: 'LinkedIn' },
    { icon: <FaX size={40} />, href: 'https://x.com/digitalmustiii', label: 'X' },
    { icon: <FaDiscord size={40} />, href: 'https://discord.com/users/digitalmustiii', label: 'Discord' },
    { icon: <FaWhatsapp size={40} />, href: 'https://wa.me/+2349015015167', label: 'WhatsApp' },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-gray-800 shadow-lg shadow-black/20">
      <div className="w-full px-4 py-5 relative flex items-center justify-center">
        {/* Logo - now with glowing pulse effect */}
        <Link 
          href="/"
          className="absolute left-4 text-5xl font-extrabold tracking-tighter group cursor-pointer"
        >
          <span className="text-white">M</span>
          <span className="text-[#F2B47E] transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_#F2B47E] hover:scale-110">B</span>
          <div className="absolute -inset-2 bg-gradient-to-r from-[#F2B47E]/0 via-[#F2B47E]/20 to-[#F2B47E]/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
        </Link>

        {/* Navigation centered - desktop with simple hover */}
        <nav className="hidden md:flex space-x-10">
          {navItems.map(({ label, href }) => (
            <Link
              key={label} 
              href={href}
              className={`transition-colors duration-200 font-medium tracking-wide px-4 py-3 rounded-lg ${
                pathname === href 
                  ? 'text-[#F2B47E]' 
                  : 'text-gray-100 hover:text-[#F2B47E]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social Icons at extreme right edge - desktop with simple hover */}
        <div className="hidden md:flex space-x-6 absolute right-4">
          {socialItems.map(({ icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F2B47E] transition-colors duration-200"
            >
              {icon}
            </Link>
          ))}
        </div>

        {/* Mobile menu button with simple hover */}
        <div className="md:hidden absolute right-4">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 border border-gray-700 rounded-md bg-black/40 hover:border-[#F2B47E] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F2B47E]/50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-white rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown with simple styling */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-xl border-t border-gray-800 ${
          isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-3 px-6 pb-4">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={closeMenu}
              className={`font-medium text-base px-4 py-2 transition-colors duration-200 rounded-lg ${
                pathname === href 
                  ? 'text-[#F2B47E] bg-[#F2B47E]/10' 
                  : 'text-gray-100 hover:text-[#F2B47E]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        
        <div className="flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-800 px-4">
          {socialItems.map(({ icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F2B47E] transition-colors duration-200 p-1"
            >
              <div className="text-2xl">
                {icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}