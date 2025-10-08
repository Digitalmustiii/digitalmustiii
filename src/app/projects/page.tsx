'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  github: string;
  techStack: string[];
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Lytrana AI",
      description: "AI-powered data insights platform for CSV analysis, instant reports, and team collaboration with mobile-ready dashboards.",
      image: "/lytrana.png",
      liveDemo: "https://lytrana.vercel.app/",
      github: "https://github.com/Digitalmustiii/lytrana",
      techStack: ["Next.js", "TypeScript", "Gemini AI", "Convex", "Papaparse"]
    },
    {
      id: 2,
      title: "Trainetic AI",
      description: "Fullstack AI fitness platform generating personalized workout programs with real-time progress tracking and intelligent coaching.",
      image: "/trainetic.png",
      liveDemo: "https://trainaticai.vercel.app/",
      github: "https://github.com/Digitalmustiii/trainatic-ai",
      techStack: ["Next.js", "React", "Typescript", "Clerk API & Convex", "OpenAI"]
    },
    {
      id: 3,
      title: "BTAML Universe",
      description: "Unified digital platform delivering real-time African news, business insights, scholarships, and legal resources.",
      image: "/btaml.png",
      liveDemo: "https://btamluniverse.vercel.app/",
      github: "https://github.com/Digitalmustiii/btaml-universe",
      techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "React"]
    },
    {
      id: 4,
      title: "Events Display System",
      description: "Campus events platform showcasing academic activities with dates, locations, and visuals in a clean interface.",
      image: "/display.png",
      liveDemo: "https://eventsdisplaysystem.vercel.app/",
      github: "https://github.com/Digitalmustiii/eventsdisplaysystem",
      techStack: ["React", "TypeScript", "Next.js", "PostgreSQL", "Supabase" ]
    },
    {
      id: 5,
      title: "SkillSnap",
      description: "AI web tool for generating professional thumbnails with customizable themes and tech stack icons for social profiles.",
      image: "/skillsnap.png",
      liveDemo: "https://skillsnap-livid.vercel.app/",
      github: "https://github.com/Digitalmustiii/skillsnap",
      techStack: ["Typescript", "Next.js", "Tailwind CSS", "React Hook Form", "Framer Motion"]
    },
    {
      id: 6,
      title: "Authentication System",
      description: "Modern auth system with Google, GitHub, LinkedIn sign-in featuring secure sessions and responsive design.",
      image: "/nova.png",
      liveDemo: "https://novaauthentication.vercel.app/",
      github: "https://github.com/Digitalmustiii/novaauthentication",
      techStack: ["React", "Next.js", "TypeScript", "Supabase", "Notion"]
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#F2B47E] relative inline-block">
              Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#F2B47E]/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Here are some of my projects that showcase my skills in fullstack development, 
            AI, and data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-[#F2B47E]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#F2B47E]/10"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F2B47E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-102"
                />
                
                {/* Desktop hover buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#F2B47E] text-black font-semibold rounded-lg hover:bg-[#e89b57] transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2 text-sm border border-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </Link>
                </div>

                {/* Mobile-only buttons - always visible */}
                <div className="md:hidden absolute inset-0 bg-black/50 flex items-center justify-center gap-3 z-20">
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#F2B47E] text-black font-semibold rounded-lg hover:bg-[#e89b57] transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2 text-sm border border-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[#F2B47E] font-bold text-xl mb-3 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black/40 border border-gray-800 rounded-md text-xs font-medium text-gray-300 hover:border-[#F2B47E]/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Show Less Button */}
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#F2B47E] to-[#e89b57] text-black font-bold rounded-lg hover:from-[#e89b57] hover:to-[#F2B47E] transition-all duration-300 transform  hover:shadow-lg hover:shadow-[#F2B47E]/20"
            >
              <span className="flex items-center gap-2">
                {showAll ? (
                  <>
                    Show Less
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-1">
                      <path d="m18 15-6-6-6 6"/>
                    </svg>
                  </>
                ) : (
                  <>
                    Show More Projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-y-1">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </>
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}