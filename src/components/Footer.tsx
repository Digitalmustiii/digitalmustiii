'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full border-t border-gray-800 bg-black/80 backdrop-blur-lg py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section with Logo and Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <Link href="/" className="text-4xl font-extrabold tracking-tighter relative group">
            <span className="text-white">M</span>
            <span className="text-[#F2B47E] transition-colors duration-300 hover:text-white">B</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F2B47E] group-hover:w-full transition-all duration-300"></span>
          </Link>
                   
          {/* Quote/Tagline Section */}
          <div className="text-center md:text-right">
            <blockquote className="text-lg md:text-xl font-medium text-gray-200 mb-2 italic">
              &quot;Building tomorrow&apos;s solutions today&quot;
            </blockquote>
            <p className="text-sm text-gray-400">
              Crafting digital experiences that make a difference
            </p>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-[#F2B47E]">Sanusi MB</span>. All rights reserved.
          </div>
          
          {/* Quick Links and Made with care */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <nav className="flex gap-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`text-xs transition-colors duration-200 cursor-pointer ${
                    pathname === href 
                      ? 'text-[#F2B47E]' 
                      : 'text-gray-500 hover:text-[#F2B47E]'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            
            <div className="text-gray-500 text-xs flex gap-4">
              <div className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-[#F2B47E] rounded-full"></span>
                <span>Made with care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;