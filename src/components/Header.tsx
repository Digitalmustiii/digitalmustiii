'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { FiHome, FiUser, FiBriefcase, FiCode, FiMail, FiMoreHorizontal, FiX } from 'react-icons/fi';

export default function Header() {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/', icon: <FiHome size={20} /> },
    { label: 'About', href: '/about', icon: <FiUser size={20} /> },
    { label: 'Services', href: '/services', icon: <FiBriefcase size={20} /> },
    { label: 'Projects', href: '/projects', icon: <FiCode size={20} /> },
    { label: 'Contact', href: '/contact', icon: <FiMail size={20} /> },
  ];

  const socialItems = [
    { icon: <FaGithub size={40} />, href: 'https://github.com/digitalmustiii', label: 'GitHub', mobileIcon: <FaGithub size={22} /> },
    { icon: <FaLinkedin size={40} />, href: 'https://linkedin.com/in/sbmustapha', label: 'LinkedIn', mobileIcon: <FaLinkedin size={22} /> },
    { icon: <FaXTwitter size={40} />, href: 'https://x.com/sir_mustiii', label: 'X', mobileIcon: <FaXTwitter size={22} /> },
    { icon: <FaWhatsapp size={40} />, href: 'https://wa.me/+2349015015167', label: 'WhatsApp', mobileIcon: <FaWhatsapp size={22} /> },
  ];

  return (
    <>
      {/* ─── Desktop Header ─── */}
      <header className="hidden md:block fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-gray-800 shadow-lg shadow-black/20">
        <div className="w-full px-4 py-5 relative flex items-center justify-center">
          {/* Logo */}
          <Link
            href="/"
            className="absolute left-4 text-5xl font-extrabold tracking-tighter group cursor-pointer"
          >
            <span className="text-white">M</span>
            <span className="text-[#F2B47E] transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_#F2B47E] hover:scale-110">
              B
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#F2B47E]/0 via-[#F2B47E]/20 to-[#F2B47E]/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
          </Link>

          {/* Navigation - desktop */}
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

          {/* Social Icons - desktop */}
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
        </div>
      </header>

      {/* ─── Mobile: Top Logo Bar ─── */}
      <div className="md:hidden fixed top-0 w-full z-50 px-4 pt-4 pointer-events-none">
        <Link
          href="/"
          className="inline-block text-4xl font-extrabold tracking-tighter pointer-events-auto"
        >
          <span className="text-white">M</span>
          <span className="text-[#F2B47E]">B</span>
        </Link>
      </div>

      {/* ─── Mobile: Floating Bottom Nav Pill ─── */}
      <nav
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-3 py-2 rounded-full
          bg-black/60 backdrop-blur-xl border border-gray-700/50 shadow-lg shadow-black/40"
        style={{ WebkitBackdropFilter: 'blur(20px)' }}
      >
        {navItems.map(({ label, href, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group"
            >
              {/* Active glow bg */}
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-[#F2B47E]/15 shadow-[0_0_12px_rgba(242,180,126,0.3)]"></span>
              )}

              {/* Icon */}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  isActive ? 'text-[#F2B47E]' : 'text-gray-400 group-hover:text-white'
                }`}
              >
                {icon}
              </span>

              {/* Hover label tooltip */}
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-300 bg-black/80 px-2 py-0.5 rounded-md whitespace-nowrap
                opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 border border-gray-700/40">
                {label}
              </span>

              {/* Active dot */}
              {isActive && (
                <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-[#F2B47E] shadow-[0_0_6px_#F2B47E]"></span>
              )}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="w-px h-5 bg-gray-700/60 mx-1"></div>

        {/* Social toggle (⋯ / ✕) */}
        <button
          onClick={() => setIsSocialOpen(!isSocialOpen)}
          aria-label="Social links"
          className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group"
        >
          {isSocialOpen && (
            <span className="absolute inset-0 rounded-full bg-[#F2B47E]/15 shadow-[0_0_12px_rgba(242,180,126,0.3)]"></span>
          )}
          <span
            className={`relative z-10 transition-all duration-300 ${
              isSocialOpen ? 'text-[#F2B47E] rotate-180' : 'text-gray-400 group-hover:text-white'
            }`}
          >
            {isSocialOpen ? <FiX size={20} /> : <FiMoreHorizontal size={20} />}
          </span>
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-300 bg-black/80 px-2 py-0.5 rounded-md whitespace-nowrap
            opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 border border-gray-700/40">
            More
          </span>
        </button>
      </nav>

      {/* ─── Mobile: Social Popup (slides up from pill) ─── */}
      <div
        className={`md:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3 py-2.5 rounded-2xl
          bg-black/70 backdrop-blur-xl border border-gray-700/50 shadow-lg shadow-black/40
          transition-all duration-300 ease-out
          ${isSocialOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
        style={{ WebkitBackdropFilter: 'blur(20px)' }}
      >
        {socialItems.map(({ mobileIcon, href, label }, i) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-11 h-11 rounded-full text-gray-400 hover:text-[#F2B47E]
              hover:bg-[#F2B47E]/10 transition-all duration-300 group"
          >
            <span className="relative z-10">{mobileIcon}</span>

            {/* Label tooltip */}
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-300 bg-black/80 px-2 py-0.5 rounded-md whitespace-nowrap
              opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 border border-gray-700/40">
              {label}
            </span>
          </Link>
        ))}
      </div>

      {/* ─── Mobile: Tap-outside overlay to dismiss social popup ─── */}
      {isSocialOpen && (
        <div
          className="md:hidden fixed inset-0 z-30"
          onClick={() => setIsSocialOpen(false)}
        />
      )}
    </>
  );
}