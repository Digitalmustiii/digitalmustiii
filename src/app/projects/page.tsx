'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Reusable Icons ─────────────────────────────────────────────────────────

const ExternalLinkIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ChevronIcon = ({ up = false }: { up?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-300"
  >
    {up ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
  </svg>
);

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveDemo?: string;
  github?: string;
  techStack: string[];
}

// ─── Project Card ────────────────────────────────────────────────────────────

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative bg-black/40 backdrop-blur-xl border border-gray-800/60 rounded-2xl overflow-hidden hover:border-[#F2B47E]/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-300">
    {/* Image + Overlay */}
    <div className="relative h-52 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2B47E]/25 via-transparent to-purple-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Unified overlay — always visible on mobile, hover-triggered on desktop */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/70 flex items-center justify-center z-20 gap-3 px-4
        md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
        {project.liveDemo && (
          <Link
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-5 py-2.5 md:py-3 bg-[#F2B47E] text-black font-semibold rounded-lg hover:bg-[#e89b57] transition-colors duration-300 flex items-center gap-2 text-sm shadow-lg shadow-black/40"
          >
            <ExternalLinkIcon size={15} />
            Live Demo
          </Link>
        )}
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-5 py-2.5 md:py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2 text-sm shadow-lg shadow-black/40"
          >
            <GitHubIcon size={15} />
            GitHub
          </Link>
        )}
      </div>
    </div>

    {/* Body */}
    <div className="p-6 space-y-3">
      <h3 className="text-xl font-bold text-white group-hover:text-[#F2B47E] transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

      <div className="pt-1">
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-black/60 border border-gray-700/60 rounded-md text-xs font-medium text-gray-200 hover:border-[#F2B47E]/70 hover:text-[#F2B47E] transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Wildlife Camera AI',
      description:
        'Real-time AI wildlife monitoring with YOLOv8, smart alerts, Telegram bot, and interactive web dashboard. Processes 15+ FPS on edge devices.',
      image: '/wildlife.png',
      github: 'https://github.com/Digitalmustiii/wildlife-camera-ai',
      techStack: ['Python', 'YOLOv8', 'FastAPI', 'React', 'SQLite', 'Telegram API'],
    },
    {
      id: 2,
      title: 'Lytrana AI',
      description:
        'AI-powered data insights platform for CSV analysis, instant reports, and team collaboration with mobile-ready dashboards.',
      image: '/lytrana.png',
      liveDemo: 'https://lytrana.vercel.app/',
      github: 'https://github.com/Digitalmustiii/lytrana',
      techStack: ['Next.js', 'TypeScript', 'Gemini AI', 'Convex', 'Papaparse'],
    },
    {
      id: 3,
      title: 'Trainetic AI',
      description:
        'Fullstack AI fitness platform generating personalized workout programs with real-time progress tracking and intelligent coaching.',
      image: '/trainetic.png',
      liveDemo: 'https://trainaticai.vercel.app/',
      github: 'https://github.com/Digitalmustiii/trainatic-ai',
      techStack: ['Next.js', 'React', 'Typescript', 'Clerk API & Convex', 'OpenAI'],
    },
    {
      id: 4,
      title: 'BTAML Universe',
      description:
        'Unified digital platform delivering real-time African news, business insights, scholarships, and legal resources.',
      image: '/btaml.png',
      liveDemo: 'https://btamluniverse.vercel.app/',
      techStack: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'React'],
    },
    {
      id: 5,
      title: 'Events Display System',
      description:
        'Campus events platform showcasing academic activities with dates, locations, and visuals in a clean interface.',
      image: '/display.png',
      liveDemo: 'https://eventsdisplaysystem.vercel.app/',
      github: 'https://github.com/Digitalmustiii/eventsdisplaysystem',
      techStack: ['React', 'TypeScript', 'Next.js', 'PostgreSQL', 'Supabase'],
    },
    {
      id: 6,
      title: 'SkillSnap',
      description:
        'AI web tool for generating professional thumbnails with customizable themes and tech stack icons for social profiles.',
      image: '/skillsnap.png',
      liveDemo: 'https://skillsnap-livid.vercel.app/',
      github: 'https://github.com/Digitalmustiii/skillsnap',
      techStack: ['Typescript', 'Next.js', 'Tailwind CSS', 'React Hook Form', 'Framer Motion'],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden min-h-screen bg-gradient-to-br from-[#020617] via-[#050308] to-[#1f2937]"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-orange-900/10" />
      <div className="absolute top-24 left-10 w-72 h-72 bg-[#F2B47E]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-24 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="text-[#F2B47E] relative inline-block">
              Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#F2B47E]/30 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Selected work spanning full-stack engineering and applied AI – from data tooling and
            agents to user-facing products in production.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More / Show Less */}
        {projects.length > 3 && (
          <div className="mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="mx-auto group px-8 py-3.5 bg-transparent border border-gray-600 text-gray-100 font-semibold rounded-lg
                hover:border-[#F2B47E] hover:text-[#F2B47E] hover:shadow-md hover:shadow-[#F2B47E]/10
                transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'Show More Projects'}
              <ChevronIcon up={showAll} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}