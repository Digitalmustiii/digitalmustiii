'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { HiMail, HiClock, HiSparkles } from 'react-icons/hi';

// ─── Data ────────────────────────────────────────────────────────────────────

const socialItems = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/digitalmustiii', label: 'GitHub' },
  { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/sbmustapha', label: 'LinkedIn' },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.15l8.605-9.83L0 1.154h7.595l5.243 6.932L18.9 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
      </svg>
    ),
    href: 'https://x.com/sir_mustiii',
    label: 'X',
  },
  { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/+2349015015167', label: 'WhatsApp' },
];

const contactDetails = [
  {
    icon: <HiMail size={24} />,
    title: 'Email',
    value: 'sanusimustapha387@yahoo.com',
    description: 'Best for collaborations and consulting',
    href: 'mailto:sanusimustapha387@yahoo.com',
  },
  {
    icon: <HiClock size={24} />,
    title: 'Response Time',
    value: 'Within 24 hours',
    description: 'Often much faster for urgent work',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="py-20 bg-zinc-950 text-zinc-200 min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-[#F2B47E] mb-4">
            <HiSparkles size={16} />
            Get In Touch
          </div>
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Let&apos;s{' '}
            <span className="text-[#F2B47E]">Connect</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Open to AI engineering roles, consulting, and collaborations. Share your idea, product,
            or problem space—and let&apos;s explore how AI can help.
          </p>
        </div>

        {/* Contact Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="group p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-[#F2B47E]/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 bg-zinc-950 border border-zinc-700 rounded-xl text-[#F2B47E] flex-shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">{detail.title}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-lg font-semibold text-white hover:text-[#F2B47E] transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-white">{detail.value}</p>
                  )}
                  <p className="text-zinc-500 text-sm mt-2">{detail.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center">
          <div className="inline-flex p-4 bg-zinc-800 rounded-2xl mb-6">
            <HiSparkles size={28} className="text-[#F2B47E]" />
          </div>

          <h3 className="text-4xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-zinc-400 mb-10 text-lg max-w-lg mx-auto">
            Share a brief overview of your project, timelines, and goals. You&apos;ll get a clear,
            actionable response—not generic boilerplate.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:sanusimustapha387@yahoo.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#F2B47E] hover:bg-[#e89b57] text-black font-semibold rounded-2xl transition-all duration-200 text-lg shadow-lg shadow-[#F2B47E]/20"
          >
            <HiMail size={22} />
            Send Me an Email
          </a>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-12 pt-10 border-t border-zinc-800">
            <span className="text-xs text-zinc-500 uppercase tracking-widest mr-4">Or find me on</span>
            {socialItems.map(({ icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-4 text-zinc-400 hover:text-[#F2B47E] hover:bg-zinc-800 border border-transparent hover:border-zinc-700 rounded-2xl transition-all duration-200"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}