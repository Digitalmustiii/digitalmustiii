'use client';
import React, { useState } from 'react';
import { Code, Brain, Cpu, Database, Zap, GitBranch } from 'lucide-react';

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: <Brain size={32} />,
      title: 'AI Agent Development',
      description: 'Build intelligent agents and LLM-powered systems that automate tasks, understand context, and make decisions. From chatbots to autonomous workflows.',
      technologies: ['LLMs', 'Langchain', 'PyTorch', 'Hugging Face', 'Python'],
      highlights: ['Autonomous Agents', 'Context-Aware Systems', 'Multi-Agent Orchestration']
    },
    {
      icon: <Cpu size={32} />,
      title: 'Edge & On-Device AI',
      description: 'Deploy AI models on edge devices and hardware-constrained environments. Optimized inference for real-time, low-latency applications.',
      technologies: ['ONNX', 'TensorRT', 'Edge Deployment', 'Model Optimization'],
      highlights: ['Real-Time Inference', 'Hardware Optimization', 'Low-Latency Solutions']
    },
    {
      icon: <Code size={32} />,
      title: 'AI-Powered Backend Systems',
      description: 'Scalable backend architectures integrating AI capabilities. APIs, real-time processing, and intelligent data pipelines.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'REST APIs'],
      highlights: ['AI Integration', 'Real-Time Processing', 'Scalable Architecture']
    },
    {
      icon: <Zap size={32} />,
      title: 'Reinforcement Learning Systems',
      description: 'Design and implement RL-based solutions for optimization, control systems, and decision-making applications.',
      technologies: ['PyTorch', 'Reinforcement Learning', 'Simulation', 'Python'],
      highlights: ['Policy Optimization', 'Multi-Agent RL', 'Simulation Environments']
    },
    {
      icon: <Database size={32} />,
      title: 'Embedded Systems & IoT',
      description: 'Development for embedded systems and IoT devices. Hardware-aware software design and edge computing solutions.',
      technologies: ['Embedded Systems', 'Edge Computing', 'Hardware Integration', 'Real-Time OS'],
      highlights: ['Low-Level Programming', 'Hardware Integration', 'Resource Optimization']
    },
    {
      icon: <GitBranch size={32} />,
      title: 'DevOps for AI Deployment',
      description: 'CI/CD pipelines for AI models. Automated testing, deployment, and monitoring for on-premise and edge AI systems.',
      technologies: ['Docker', 'CI/CD', 'Model Monitoring', 'DevOps', 'Git'],
      highlights: ['Automated Deployment', 'Model Versioning', 'Infrastructure as Code']
    }
  ];

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-15 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-orange-900/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2B47E]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <h2 className="text-5xl md:text-5xl font-bold text-[#F2B47E] relative inline-block">
              What I <span className='text-white'>
                Offer
              </span>
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#F2B47E]/30 rounded-full"></span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Specialized <span className="text-[#F2B47E] font-semibold">AI solutions</span> and intelligent systems. 
              From edge deployment to <span className="text-[#F2B47E] font-semibold">autonomous agents</span>.
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
                  
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {service.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F2B47E]"></div>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="pt-4 border-t border-gray-800/50">
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Technologies</p>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-1">
                      <path d="m18 15-6-6-6 6"/>
                    </svg>
                  </>
                ) : (
                  <>
                    More Services
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