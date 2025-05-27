'use client'
import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Users } from 'lucide-react';
import { AnimatedTextProps } from '@/app/types';


const AnimatedText = ({ children, className = "", delay = 0 }:AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  return (
<section className="relative min-h-screen w-full bg-gradient-to-br text-white overflow-hidden flex items-center justify-center px-4 sm:px-6">

  <div className="relative z-10 w-full max-w-screen-sm sm:max-w-3xl flex flex-col items-center justify-center text-center">
    
        <AnimatedText delay={200}>
      <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 mb-8 mt-6">
        <Sparkles className="w-5 h-5 text-rose-400 animate-pulse" />
        <span className="text-slate-200 font-semibold text-lg">Pre-Events Series 2025</span>
      </div>
    </AnimatedText>

    <AnimatedText delay={400}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-rose-200 to-purple-200 bg-clip-text text-transparent leading-tight">
        GIRLATHON 2025
      </h1>
    </AnimatedText>



    <AnimatedText delay={600}>
      <p className="text-base sm:text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed px-2">
        Where <span className="text-rose-400 font-semibold">innovation</span> meets <span className="text-purple-400 font-semibold">inspiration</span>. 
        Join our pre-event series designed to empower the next generation of women in tech.
      </p>
    </AnimatedText>

    <AnimatedText delay={800}>
  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

    <a
      href="https://chat.whatsapp.com/IhiEwwzO2HRDzlh8oanFQs"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative px-4 py-2 sm:px-8 sm:py-4 border-2 border-white/20 rounded-full font-semibold text-white text-lg hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
    >
      <span className="flex items-center gap-2">
        <Users className="w-5 h-5 text-rose-400 group-hover:animate-pulse" />
        Join Community
      </span>
    </a>

  </div>
</AnimatedText>


    <AnimatedText delay={1000}>
          <div className="mt-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-medium text-slate-300 tracking-wider uppercase">
            Explore Events
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent mt-2 group-hover:via-rose-400 transition-all duration-300" />
        </div>
      <div className="mt-5 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
      </div>
    </AnimatedText>

  </div>
</section>

  );
};

export default Hero;
