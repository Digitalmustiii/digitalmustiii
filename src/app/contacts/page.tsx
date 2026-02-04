'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { HiMail, HiClock, HiSparkles } from 'react-icons/hi';

// ─── Data ────────────────────────────────────────────────────────────────────

const socialItems = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/digitalmustiii', label: 'GitHub' },
  { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/sbmustapha', label: 'LinkedIn' },
  { icon: <FaXTwitter size={20} />, href: 'https://x.com/sir_mustiii', label: 'X' },
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
      className="py-10 min-h-screen bg-gradient-to-br from-[#020617] via-[#050308] to-[#1f2937] text-gray-200 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2B47E]/6 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/6 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-full text-sm font-medium text-[#F2B47E] mb-4">
            <HiSparkles size={16} />
            Get In Touch
          </div>
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Let&apos;s{' '}
            <span className="text-[#F2B47E]">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Open to AI engineering roles, consulting, and collaborations. Share your idea, product,
            or problem space—and let&apos;s explore how AI can help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="group p-7 bg-black/40 backdrop-blur-md border border-gray-800/60 rounded-2xl hover:border-[#F2B47E]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/60 border border-gray-800 rounded-xl text-[#F2B47E] flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{detail.title}</p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-base font-semibold text-white hover:text-[#F2B47E] transition-colors duration-200"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-white">{detail.value}</p>
                    )}
                    <p className="text-gray-500 text-sm mt-1">{detail.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="relative mt-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F2B47E]/10 via-[#F2B47E]/5 to-[#F2B47E]/10 rounded-2xl blur-xl opacity-60" />
            <div className="relative p-10 bg-black/60 backdrop-blur-lg border border-gray-800/60 rounded-2xl hover:border-[#F2B47E]/30 transition-all duration-300 text-center">
              <div className="inline-flex p-3 bg-[#F2B47E]/10 rounded-full mb-5">
                <HiSparkles size={22} className="text-[#F2B47E]" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-3">
                Ready to Work Together?
              </h3>
              <p className="text-gray-400 mb-8 text-base leading-relaxed max-w-xl mx-auto">
                Share a brief overview of your project, timelines, and goals. You&apos;ll get a
                clear, actionable response—not generic boilerplate.
              </p>

              {/* Email CTA Button */}
              <a
                href="mailto:sanusimustapha387@yahoo.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#F2B47E] to-[#e89b57] text-black font-bold rounded-lg
                  hover:from-[#e89b57] hover:to-[#F2B47E] hover:shadow-lg hover:shadow-[#F2B47E]/20
                  transition-all duration-300 hover:-translate-y-0.5"
              >
                <HiMail size={18} />
                Get In Touch
              </a>

              {/* Social Icons Row */}
              <div className="flex items-center justify-center gap-3 mt-8 pt-8 border-t border-gray-800/60">
                <span className="text-xs text-gray-600 uppercase tracking-widest mr-2">Or find me on</span>
                {socialItems.map(({ icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg text-gray-400 border border-gray-800/60 hover:border-[#F2B47E]/40 hover:text-[#F2B47E] hover:bg-[#F2B47E]/5 transition-all duration-200"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}