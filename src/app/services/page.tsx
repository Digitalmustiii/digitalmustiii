'use client';
import React, { useState } from 'react';
import { Code, Brain, Cpu, Database, Zap } from 'lucide-react';

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: <Brain size={32} />,
      title: 'LLM Integration & AI Agents',
      description:
        'Production-ready agents with tool calling, multi-step reasoning, and multi-agent workflows.',
      technologies: ['OpenAI', 'Claude', 'AutoGen', 'CrewAI'],
    },
    {
      icon: <Database size={32} />,
      title: 'RAG Systems & Vector Search',
      description:
        'Semantic + hybrid retrieval, citation tracking, production knowledge bases.',
      technologies: ['LlamaIndex', 'pgvector', 'Supabase', 'Pinecone'],
    },
    {
      icon: <Cpu size={32} />,
      title: 'Edge & On-Device AI',
      description:
        'Quantized models, real-time inference on constrained hardware.',
      technologies: ['ONNX Runtime', 'TensorRT', 'Ollama', 'llama.cpp'],
    },
    {
      icon: <Code size={32} />,
      title: 'Full-Stack AI Applications',
      description:
        'Streaming AI apps with Next.js 14, Vercel AI SDK, Server Actions, shadcn/ui.',
      technologies: ['Next.js 14', 'Vercel AI SDK', 'Server Actions', 'shadcn/ui'],
    },
    {
      icon: <Zap size={32} />,
      title: 'Model Optimization & DevOps for AI',
      description:
        'LoRA/QLoRA fine-tuning, CI/CD for models, cost tracking, observability.',
      technologies: ['Docker', 'Prometheus', 'vLLM'],
    },
  ];

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section
      id="services"
      className="py-15 relative overflow-hidden min-h-screen bg-gradient-to-br from-[#020617] via-[#050308] to-[#1f2937]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-orange-900/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2B47E]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <h2 className="text-5xl md:text-5xl font-bold text-[#F2B47E] relative inline-block">
              What I <span className="text-white">Offer</span>
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#F2B47E]/30 rounded-full"></span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Production-ready <span className="text-[#F2B47E] font-semibold">AI engineering</span>{' '}
              services. From <span className="text-[#F2B47E] font-semibold">intelligent agents</span>{' '}
              to full-stack deployment.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-black/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 shadow-2xl hover:border-[#F2B47E]/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#F2B47E]/20 to-orange-500/20 rounded-xl flex items-center justify-center text-[#F2B47E] transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F2B47E] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">{service.description}</p>

                  {/* Technologies */}
                  <div className="pt-4 border-t border-gray-800/50">
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-black/60 to-gray-900/60 border border-gray-700/50 rounded-lg text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Show Less Button */}
        {services.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#F2B47E] to-[#e89b57] text-black font-bold rounded-lg hover:from-[#e89b57] hover:to-[#F2B47E] transition-all duration-300 transform hover:shadow-lg hover:shadow-[#F2B47E]/20"
            >
              <span className="flex items-center gap-2">
                {showAll ? (
                  <>
                    Show Less
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
                      className="transition-transform duration-300 group-hover:-translate-y-1"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </>
                ) : (
                  <>
                    More Services
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
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    >
                      <path d="m6 9 6 6 6-6" />
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