"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, Github, TwitterIcon, Gamepad2, Code2, Palette, Sparkles } from "lucide-react";

function RevealUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[100px] flex items-center justify-between px-6 lg:px-12 mix-blend-difference">
      <div className="font-clash font-bold text-2xl tracking-tighter text-white">
        LittleTho
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#work" className="text-sm uppercase tracking-[0.2em] font-bold text-white hover:opacity-60 transition-opacity">Work</a>
        <a href="#about" className="text-sm uppercase tracking-[0.2em] font-bold text-white hover:opacity-60 transition-opacity">About</a>
        <a href="#projects" className="text-sm uppercase tracking-[0.2em] font-bold text-white hover:opacity-60 transition-opacity">Projects</a>
        <a href="#contact" className="text-sm uppercase tracking-[0.2em] font-bold text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
          Contact
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute w-[600px] h-[600px] -top-[200px] -right-[200px] rounded-full blur-[120px] bg-orange-500/5 mix-blend-screen" />
      <div className="absolute w-[500px] h-[500px] -bottom-[150px] -left-[150px] rounded-full blur-[120px] bg-blue-900/5 mix-blend-screen" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <RevealUp>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop"
                  alt="LittleTho - Game Developer"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
                />
              </div>
            </RevealUp>
          </div>
          
          <div className="lg:col-span-7 relative">
            <RevealUp delay={0.2}>
              <h1 className="font-clash font-bold text-[12vw] lg:text-[8vw] leading-none tracking-tighter uppercase text-white">
                Game
              </h1>
            </RevealUp>
            <RevealUp delay={0.3}>
              <h1 className="font-clash font-bold text-[12vw] lg:text-[8vw] leading-none tracking-tighter uppercase text-white -mt-4">
                Developer
              </h1>
            </RevealUp>
            <RevealUp delay={0.4}>
              <p className="mt-8 text-lg lg:text-xl text-white/40 max-w-md font-light leading-relaxed">
                Crafting immersive digital experiences through innovative gameplay and stunning visuals.
              </p>
            </RevealUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { label: "Projects", value: "12+" },
    { label: "Years Experience", value: "5" },
    { label: "Awards", value: "3" },
    { label: "Happy Players", value: "50K+" },
  ];

  return (
    <section className="border-t border-white/5 py-16 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <RevealUp key={stat.label} delay={i * 0.1}>
              <div className="text-center lg:text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-2">{stat.label}</p>
                <p className="font-clash font-medium text-3xl lg:text-4xl text-white">{stat.value}</p>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-32 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <RevealUp>
              <span className="font-clash font-bold text-6xl lg:text-8xl tracking-tighter text-white/20">01</span>
            </RevealUp>
          </div>
          <div className="lg:col-span-9">
            <RevealUp delay={0.1}>
              <h2 className="font-clash font-bold text-4xl lg:text-6xl tracking-tighter mb-8 text-white">About</h2>
            </RevealUp>
            <RevealUp delay={0.2}>
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-white/80 mb-8 max-w-3xl">
                I&apos;m an independent game developer passionate about creating unique gaming experiences. 
                With expertise in Unity, Unreal Engine, and custom game frameworks, I bring ideas to life 
                through code, art, and design.
              </p>
            </RevealUp>
            <RevealUp delay={0.3}>
              <p className="text-xl lg:text-2xl font-light leading-relaxed text-white/80 max-w-3xl">
                From concept to release, I handle every aspect of game development ensuring 
                polished, engaging experiences that players love.
              </p>
            </RevealUp>
            <RevealUp delay={0.4}>
              <a href="#work" className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.2em] font-bold text-white border-b border-white pb-1 hover:pb-2 transition-all">
                Explore Work <ArrowUpRight className="w-4 h-4" />
              </a>
            </RevealUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    { title: "Nebula Drift", category: "Racing Game", year: "2024", image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=800&auto=format&fit=crop" },
    { title: "Shadow Protocol", category: "Stealth Action", year: "2023", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop" },
    { title: "Aether Chronicles", category: "RPG", year: "2023", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop" },
  ];

  return (
    <section id="projects" className="py-32 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-3">
            <RevealUp>
              <span className="font-clash font-bold text-6xl lg:text-8xl tracking-tighter text-white/20">02</span>
            </RevealUp>
          </div>
          <div className="lg:col-span-9">
            <RevealUp delay={0.1}>
              <h2 className="font-clash font-bold text-4xl lg:text-6xl tracking-tighter text-white">Featured Projects</h2>
            </RevealUp>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <RevealUp key={project.title} delay={i * 0.15}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-sm uppercase tracking-[0.2em] font-bold text-white">View Project <ArrowUpRight className="w-4 h-4 inline" /></span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-clash font-medium text-xl text-white">{project.title}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">{project.year}</span>
                </div>
                <p className="text-sm text-white/40 mt-1">{project.category}</p>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { name: "Unity", icon: Gamepad2 },
    { name: "Unreal Engine", icon: Sparkles },
    { name: "C# / C++", icon: Code2 },
    { name: "3D Art", icon: Palette },
  ];

  return (
    <section id="work" className="py-32 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <RevealUp>
              <span className="font-clash font-bold text-6xl lg:text-8xl tracking-tighter text-white/20">03</span>
            </RevealUp>
          </div>
          <div className="lg:col-span-9">
            <RevealUp delay={0.1}>
              <h2 className="font-clash font-bold text-4xl lg:text-6xl tracking-tighter mb-12 text-white">Skills & Expertise</h2>
            </RevealUp>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, i) => (
                <RevealUp key={skill.name} delay={0.2 + i * 0.1}>
                  <div className="text-center p-8 border border-white/5 rounded-sm hover:border-white/20 transition-colors">
                    <skill.icon className="w-8 h-8 mx-auto mb-4 text-white/60" />
                    <p className="font-medium text-white">{skill.name}</p>
                  </div>
                </RevealUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer id="contact" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute w-[400px] h-[400px] -bottom-[200px] left-1/2 -translate-x-1/2 rounded-full blur-[120px] bg-orange-500/5 mix-blend-screen" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-clash font-bold tracking-tighter text-white/5 leading-none pointer-events-none select-none">
        LT
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <RevealUp>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-8">Get in Touch</p>
        </RevealUp>
        <RevealUp delay={0.1}>
          <a href="mailto:hello@littletho.dev" className="inline-block font-clash font-bold text-4xl lg:text-6xl tracking-tighter text-white border-b border-white pb-2 hover:pb-4 hover:opacity-60 transition-all duration-300">
            hello@littletho.dev
          </a>
        </RevealUp>
        <RevealUp delay={0.2}>
          <div className="flex items-center justify-center gap-8 mt-16">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="mailto:hello@littletho.dev" className="text-white/40 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </RevealUp>
        <RevealUp delay={0.3}>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 mt-16">© 2024 LittleTho. All rights reserved.</p>
        </RevealUp>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <FooterSection />
    </main>
  );
}
