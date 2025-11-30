'use client';

import { useState, useMemo, useCallback } from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  achievements: string[];
}

interface SkillItem {
  skill: string;
  level: number;
}

interface TabItem {
  id: string;
  label: string;
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<string>('skills');

  const tabs: TabItem[] = useMemo(
    () => [
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
    ],
    []
  );

  const experiences: Experience[] = useMemo(
    () => [
      {
        title: 'Data Analyst',
        company: 'NITDA',
        period: 'May 2023 – Dec 2023',
        type: 'Internship',
        achievements: ['Analyzed complex datasets', 'Improved efficiency by 40%'],
      },
      {
        title: 'Chief Technology Officer',
        company: 'Btaml Universe',
        period: 'Nov 2022 - Present',
        type: 'Full-time',
        achievements: ['Led technical architecture', 'Built systems for 10k+ users'],
      },
    ],
    []
  );

  const allSkills: string[] = useMemo(
    () => [
      // Core Languages
      'Python',
      'TypeScript',
      'Node.js',

      // LLM & AI
      'OpenAI API',
      'Anthropic Claude',
      'DeepSeek',
      'Tool/Function Calling',
      'LlamaIndex',
      'RAG Systems',
      'Prompt Engineering',
      'Structured Outputs',

      // ML & Deep Learning
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'Fine-tuning (LoRA/QLoRA)',

      // AI Agents
      'OpenAI Assistants',
      'AutoGen',
      'CrewAI',
      'Multi-Agent Systems',

      // Edge & Optimization
      'ONNX Runtime',
      'TensorRT',
      'Model Quantization',
      'On-Device Inference',
      'OLLAMA',
      'llama.cpp',
      'Edge Deployment',

      // Backend & Databases
      'PostgreSQL',
      'Supabase',
      'pgvector',
      'Redis',
      'REST APIs',

      // Frontend & Full-Stack
      'Next.js 14+',
      'React',
      'Vercel AI SDK',
      'Real-time Systems',
      'shadcn/ui',

      // DevOps & Deployment
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Git',
      'Monitoring & Observability',
    ],
    []
  );

  const engineeringSkills: SkillItem[] = useMemo(
    () => [
      { skill: 'LLM Integration & Tool Calling', level: 92 },
      { skill: 'RAG Systems & Vector Search', level: 88 },
      { skill: 'AI Agent Development', level: 90 },
      { skill: 'On-Device & Edge AI', level: 85 },
      { skill: 'Production Full-Stack (Next.js + AI)', level: 88 },
      { skill: 'Model Optimization & Quantization', level: 82 },
      { skill: 'DevOps for AI Systems', level: 85 },
      { skill: 'Real-time AI Applications', level: 87 },
    ],
    []
  );

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  const ProgressBar = useMemo(() => {
    const Component = ({ skill, level }: { skill: string; level: number }) => (
      <div className="group">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-200 font-medium text-sm md:text-base">{skill}</span>
          <span className="text-[#F2B47E] text-sm font-bold">{level}%</span>
        </div>
        <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-[#F2B47E] rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    );
    Component.displayName = 'ProgressBar';
    return Component;
  }, []);

  const ExperienceCard = useMemo(() => {
    const Component = ({ exp }: { exp: Experience }) => (
      <div className="relative group">
        <div className="absolute left-4 top-3 w-4 h-4 rounded-full bg-[#F2B47E] shadow-lg shadow-[#F2B47E]/20 transition-transform duration-300 z-10" />

        <div className="ml-12 p-6 bg-gradient-to-br from-black/30 to-gray-900/30 rounded-xl border border-gray-800/30 hover:border-[#F2B47E]/30 transition-all duration-300">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-[#F2B47E]/10 text-[#F2B47E] rounded-full">
              {exp.period}
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-black/40 text-gray-300 rounded-full">
              {exp.type}
            </span>
          </div>

          <h4 className="text-lg font-bold text-white mb-2 leading-tight">{exp.title}</h4>
          <p className="text-gray-300 font-medium mb-4">{exp.company}</p>

          <div className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F2B47E] mt-2 flex-shrink-0" />
                <p className="text-gray-400 text-sm">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
    Component.displayName = 'ExperienceCard';
    return Component;
  }, []);

  return (
    <section
      id="about"
      className="py-8 relative overflow-hidden min-h-screen bg-gradient-to-br from-[#020617] via-[#050308] to-[#1f2937]"
    >
      {/* soft blobs on top of gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-orange-900/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2B47E]/8 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/8 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <h2 className="text-5xl md:text-5xl font-bold text-[#F2B47E] relative inline-block">
              About <span className="text-white">Me</span>
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#F2B47E]/30 rounded-full" />
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              I build <span className="text-[#F2B47E] font-semibold">production AI systems</span> that
              solve real problems. From <span className="text-[#F2B47E] font-semibold">intelligent agents</span> to
              edge deployment.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-black/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="border-b border-gray-800/50 bg-black/20">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex-1 py-6 px-4 md:px-8 font-semibold transition-all duration-300 relative group
                      ${
                        activeTab === tab.id
                          ? 'text-[#F2B47E] bg-black/30'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-black/10'
                      }`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`${tab.id}-panel`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-base md:text-lg">{tab.label}</span>
                    </div>
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F2B47E]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8">
              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div id="skills-panel" role="tabpanel" className="space-y-10 animate-fadeIn">
                  {/* Technical Skills */}
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {allSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-black/60 to-gray-900/60 border border-gray-700/50 rounded-xl text-xs md:text-sm font-medium text-gray-200 backdrop-blur-sm hover:border-[#F2B47E]/50 hover:bg-gradient-to-r hover:from-[#F2B47E]/10 hover:to-orange-500/10 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Skills */}
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      Engineering Excellence
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {engineeringSkills.map((item, index) => (
                        <ProgressBar key={index} skill={item.skill} level={item.level} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div id="experience-panel" role="tabpanel" className="animate-fadeIn">
                  <div className="flex items-center gap-3 mb-8">
                    <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                  </div>

                  <div className="space-y-8 relative">
                    <div className="absolute left-6 top-4 bottom-0 w-0.5 bg-[#F2B47E]/50" />

                    {experiences.map((exp, index) => (
                      <ExperienceCard key={index} exp={exp} />
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div id="education-panel" role="tabpanel" className="animate-fadeIn">
                  <div className="flex items-center gap-3 mb-8">
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                  </div>

                  <div className="relative">
                    <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#F2B47E] to-transparent" />

                    <div className="space-y-12">
                      <div className="relative group">
                        <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-[#F2B47E] shadow-lg shadow-[#F2B47E]/20 transition-transform duration-300" />
                        <div className="ml-12 p-6 bg-gradient-to-br from-black/20 to-gray-900/20 rounded-xl border border-gray-800/30 hover:border-[#F2B47E]/30 transition-all duration-300">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <div className="px-3 py-1 bg-[#F2B47E]/10 text-[#F2B47E] rounded-full text-sm font-medium">
                              Nov 2025 – Jul 2027 (Expected)
                            </div>
                            <div className="px-3 py-1 bg-black/40 text-gray-300 rounded-full text-sm font-medium">
                              Master&apos;s Degree
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">
                            MSc in Computer Science and Engineering
                          </h4>
                          <p className="text-lg text-gray-300 mb-1">
                            University of Electronic Science and Technology of China (UESTC)
                          </p>
                          <p className="text-gray-400 mb-2">Chengdu, China</p>
                          <p className="text-sm text-[#F2B47E]/80 font-medium">
                            Research Focus: Artificial Intelligence
                          </p>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-[#F2B47E]/80 shadow-lg shadow-[#F2B47E]/20 transition-transform duration-300" />
                        <div className="ml-12 p-6 bg-gradient-to-br from-black/20 to-gray-900/20 rounded-xl border border-gray-800/30 hover:border-[#F2B47E]/30 transition-all duration-300">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <div className="px-3 py-1 bg-[#F2B47E]/10 text-[#F2B47E] rounded-full text-sm font-medium">
                              2020 – 2024
                            </div>
                            <div className="px-3 py-1 bg-black/40 text-gray-300 rounded-full text-sm font-medium">
                              Bachelor&apos;s Degree
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">
                            B.Sc. in Software Engineering
                          </h4>
                          <p className="text-lg text-gray-300 mb-1">Al-Hikmah University</p>
                          <p className="text-gray-400">Ilorin, Kwara State, Nigeria</p>
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-[#F2B47E]/60 shadow-lg shadow-[#F2B47E]/10 transition-transform duration-300" />
                        <div className="ml-12 p-6 bg-gradient-to-br from-black/20 to-gray-900/20 rounded-xl border border-gray-800/30 hover:border-[#F2B47E]/30 transition-all duration-300">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <div className="px-3 py-1 bg-black/40 text-gray-300 rounded-full text-sm font-medium">
                              Ongoing
                            </div>
                            <div className="px-3 py-1 bg-black/40 text-gray-300 rounded-full text-sm font-medium">
                              Certifications
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">Continuous Learning</h4>
                          <p className="text-lg text-gray-300 mb-1">Various Technical Programs</p>
                          <p className="text-gray-400">Staying current with emerging technologies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
