'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiClock, HiSparkles } from 'react-icons/hi';

const socialItems = [
  { icon: <FaGithub size={32} />,  href: 'https://github.com/digitalmustiii',        label: 'GitHub',    color: 'hover:text-gray-300' },
  { icon: <FaLinkedin size={32} />, href: 'https://linkedin.com/in/sbmustapha',      label: 'LinkedIn',  color: 'hover:text-blue-400' },
  { icon: <FaX size={32} />,        href: 'https://x.com/digitalmustiii',            label: 'X',         color: 'hover:text-gray-400' },
  { icon: <FaDiscord size={32} />,  href: 'https://discord.com/users/digitalmustiii', label: 'Discord',   color: 'hover:text-indigo-400' },
  { icon: <FaWhatsapp size={32} />, href: 'https://wa.me/+2349015015167',           label: 'WhatsApp',  color: 'hover:text-green-400' },
];

const contactDetails = [
  {
    icon: <HiMail size={28} />,
    title: 'Email',
    value: 'sanusimustapha387@yahoo.com',
    description: 'Best for business inquiries',
    href: 'mailto:sanusimustapha387@yahoo.com',
    color: 'text-[#F2B47E]'
  },
  {
    icon: <HiLocationMarker size={28} />,
    title: 'Location',
    value: 'Chengdu, China',
    description: 'Available for remote work',
    color: 'text-green-400'
  },
  {
    icon: <HiClock size={28} />,
    title: 'Response Time',
    value: 'Within 24 hours',
    description: 'Usually much faster',
    color: 'text-blue-400'
  }
];

export default function ContactPage() {
  return (
    <section id="contact" className="py-6 bg-gradient-to-b from-black via-gray-900/50 to-black text-gray-200 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2B47E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-full text-sm font-medium text-[#F2B47E] mb-4 hover:bg-black/60 transition-all duration-300">
            <HiSparkles size={16} />
            Get In Touch
          </div>
          <h2 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Let&apos;s <span className="bg-gradient-to-r from-[#F2B47E] to-[#e89b57] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Whether you have a question, 
            want to collaborate, or just want to say hi, I&apos;d love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactDetails.map((detail, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F2B47E]/20 to-[#F2B47E]/5 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative p-8 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md border border-gray-800/60 rounded-2xl hover:border-[#F2B47E]/40 transition-all duration-500 text-center group-hover:transform group-hover:-translate-y-1">
                  <div className={`inline-flex p-4 bg-gradient-to-br from-black/70 to-black/50 rounded-2xl mb-6 ${detail.color} group-hover:scale-110 transition-transform duration-300`}>
                    {detail.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">{detail.title}</h3>
                  {detail.href ? (
                    <a 
                      href={detail.href}
                      className="text-lg font-medium text-[#F2B47E] hover:text-[#e89b57] transition-colors duration-300 block mb-3 hover:underline"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-white mb-3">{detail.value}</p>
                  )}
                  <p className="text-gray-400 text-sm">{detail.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Connect on <span className="bg-gradient-to-r from-[#F2B47E] to-[#e89b57] bg-clip-text text-transparent">Social Media</span>
            </h3>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
              Follow me for updates, insights, and behind-the-scenes content
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-20">
            {socialItems.map(({ icon, href, label, color }, index) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F2B47E]/15 to-[#F2B47E]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                <div className={`relative p-8 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-md border border-gray-800/60 rounded-2xl text-gray-200 ${color} transition-all duration-500 hover:scale-[1.05] hover:shadow-xl hover:shadow-[#F2B47E]/10 hover:border-[#F2B47E]/40 text-center group-hover:transform group-hover:-translate-y-2`}>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-white transition-colors duration-300">{label}</h4>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#F2B47E]/60 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F2B47E]/20 via-[#F2B47E]/10 to-[#F2B47E]/20 rounded-2xl blur-2xl animate-pulse"></div>
              <div className="relative p-10 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-lg border border-gray-800/60 rounded-2xl max-w-2xl mx-auto hover:border-[#F2B47E]/30 transition-all duration-500">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#F2B47E]/20 to-[#F2B47E]/10 rounded-full">
                    <HiSparkles size={24} className="text-[#F2B47E]" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Ready to Work Together?</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  I&apos;m always excited to take on new challenges and collaborate on interesting projects.
                </p>
                <a 
                  href="mailto:sanusimustapha387@yahoo.com"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#F2B47E] via-[#F2B47E] to-[#e89b57] text-black font-bold text-lg rounded-xl hover:from-[#e89b57] hover:to-[#F2B47E] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#F2B47E]/30 active:scale-95"
                >
                  <HiMail size={22} />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}