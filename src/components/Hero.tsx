'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const phrases = [
  'Software Engineer',
  'AI Specialist',
] as const;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const typingRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const typewriterEffect = useCallback(() => {
    let mounted = true;
    let index = 0;
    const fullText = phrases[current];
    const speed = 50;

    const typeEffect = () => {
      if (!mounted) return;

      requestAnimationFrame(() => {
        setDisplayed(fullText.slice(0, index));
        if (index < fullText.length) {
          index++;
          setTimeout(typeEffect, speed);
        } else {
          setTimeout(() => {
            if (mounted) {
              setCurrent((prev) => (prev + 1) % phrases.length);
            }
          }, 2000);
        }
      });
    };

    typeEffect();
    return () => {
      mounted = false;
    };
  }, [current]);

  useEffect(() => {
    const cleanup = typewriterEffect();
    return cleanup;
  }, [typewriterEffect]);

  const animationVariants = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        containerVariants: {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        },
        itemVariants: {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        },
      };
    }

    return {
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      },
      itemVariants: {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: 'easeOut',
          },
        },
      },
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-1 lg:py-1 bg-gradient-to-br from-[#020617] via-[#050308] to-[#1f2937] relative overflow-hidden"
    >
      {/* match contact page soft decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2B47E]/6 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/6 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants.containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div
            variants={animationVariants.itemVariants}
            className="space-y-4 lg:space-y-6 order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-full text-sm font-medium text-[#F2B47E] mb-2">
              Welcome to my portfolio
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              Hello, I&rsquo;m{' '}
              <span className="text-[#F2B47E] relative inline-block">
                Sanusi MB
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#F2B47E]/30 rounded-full" />
              </span>
            </h1>

            <div className="h-12 sm:h-14 lg:h-16 flex items-center">
              <h2
                ref={typingRef}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-100"
                aria-live="polite"
                aria-label="Current role display"
              >
                {displayed}
                <span
                  className="inline-block w-0.5 h-6 sm:h-7 lg:h-8 ml-1 bg-[#F2B47E] animate-pulse"
                  aria-hidden="true"
                ></span>
              </h2>
            </div>

            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              I am a Software Engineer and MSc candidate in Computer Science specializing in AI
              systems and intelligent applications. I build and ship production AI systems end to
              end, from intelligent agents and RAG pipelines to on-device and edge deployments. My
              work spans Python, TypeScript, React, and Next.js, integrating LLMs, tool/function
              calling, and vector search into real products with solid backend services, real-time
              interfaces, and DevOps for AI. I focus on reliable, observable AI in production—
              optimizing models, deploying to cloud and edge, and wiring systems that solve concrete
              problems for users.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link
                href="#contact"
                className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-3.5 bg-gradient-to-r from-[#F2B47E] to-[#e89b57] text-black font-bold rounded-lg hover:from-[#e89b57] hover:to-[#F2B47E] hover:shadow-lg hover:shadow-[#F2B47E]/20 transition-all duration-300 transform hover:translate-y-[-2px] text-center"
                aria-label="Contact me for hiring"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={animationVariants.itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind avatar */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F2B47E]/15 to-[#F2B47E]/25 rounded-full blur-lg opacity-50 animate-pulse" />
              <div className="relative rounded-full overflow-hidden border-4 border-[#F2B47E]/80 shadow-2xl shadow-black/50 h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
                <Image
                  src="/avatar.png"
                  alt="Sanusi MB - Professional headshot"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                  priority
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white font-medium text-sm">Available for hire</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
