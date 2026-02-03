'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { HiMail, HiClock, HiSparkles } from 'react-icons/hi';
import React from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

const socialItems = [
  {
    icon: <FaGithub size={24} />,
    href: 'https://github.com/digitalmustiii',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin size={24} />,
    href: 'https://linkedin.com/in/sbmustapha',
    label: 'LinkedIn',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.15l8.605-9.83L0 1.154h7.595l5.243 6.932 5.658-6.779zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z" />
      </svg>
    ),
    href: 'https://x.com/sir_mustiii',
    label: 'X',
  },
  {
    icon: <FaWhatsapp size={24} />,
    href: 'https://wa.me/+2349015015167',
    label: 'WhatsApp',
  },
];

const contactDetails = [
  {
    icon: <HiMail size={26} />,
    title: 'Email',
    value: 'sanusimustapha387@yahoo.com',
    description: 'Best for collaborations and consulting',
    href: 'mailto:sanusimustapha387@yahoo.com',
  },
  {
    icon: <HiClock size={26} />,
    title: 'Response Time',
    value: 'Within 24 hours',
    description: 'Often much faster for urgent work',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-zinc-950 text-zinc-200 min-h-screen">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-[#F2B47E] mb-5">
            <HiSparkles size={16} />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 sm:mb-6">
            Let&apos;s <span className="text-[#F2B47E]">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Open to AI engineering roles, consulting, and collaborations. Share your idea, product,
            or problem space — and let&apos;s explore how AI can help.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactDetails.map((detail, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-[#F2B47E]/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/40"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-3 sm:p-4 bg-zinc-950 border border-zinc-700 rounded-xl text-[#F2B47E] flex-shrink-0">
                  {detail.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1.5">
                    {detail.title}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-base sm:text-lg font-semibold text-white hover:text-[#F2B47E] transition-colors break-all sm:break-normal"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-base sm:text-lg font-semibold text-white">{detail.value}</p>
                  )}
                  <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 md:p-12 text-center">
          <div className="inline-flex p-3 sm:p-4 bg-zinc-800 rounded-2xl mb-5 sm:mb-6">
            <HiSparkles className="size-6 sm:size-7 text-[#F2B47E]" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h3>

          <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed px-2 sm:px-0">
            Share a brief overview of your project, timelines, and goals. You&apos;ll get a clear,
            actionable response — not generic boilerplate.
          </p>

          {/* Email button */}
          <a
            href="mailto:sanusimustapha387@yahoo.com"
            className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-7 sm:px-10 py-3.5 sm:py-4 bg-[#F2B47E] hover:bg-[#e89b57] text-black font-semibold rounded-2xl transition-all duration-200 text-base sm:text-lg shadow-lg shadow-[#F2B47E]/20 mb-10 sm:mb-12 w-full max-w-md mx-auto"
          >
            <HiMail className="size-5 sm:size-6" />
            Send Me an Email
          </a>

          {/* Social links */}
          <div className="border-t border-zinc-800 pt-8 sm:pt-10">
            <p className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wider mb-5 sm:mb-6">
              Or find me on
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialItems.map(({ icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 sm:p-4 text-zinc-400 hover:text-[#F2B47E] hover:bg-zinc-800 border border-transparent hover:border-zinc-700 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center justify-center min-w-[52px] sm:min-w-[60px]"
                >
                  {React.cloneElement(icon, {
                    className: 'size-5 sm:size-6',
                  })}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}