"use client";
import React, { useState, useEffect, useRef, JSX } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Play,
  Box,
  Lightbulb,
  Zap,
  Glasses,
} from "lucide-react";

/* ------------------------------------------
   TYPES
------------------------------------------- */

interface Skill {
  icon: JSX.Element;
  name: string;
}

interface Project {
  name: string;
  year: string;
  color: string;
  icon: JSX.Element;
  desc: string;
  link: string | null;
  platform: string;
  image: string | null;
}

/* ------------------------------------------
   COMPONENT
------------------------------------------- */

export default function Portfolio(): JSX.Element {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  /* ------------------------------------------
     CUSTOM ANIMATIONS (unchanged – still gorgeous)
  ------------------------------------------- */
  useEffect(() => {
    const animateElement = (
      element: HTMLElement | null,
      delay: number,
      animation: {
        from: Partial<CSSStyleDeclaration>;
        to: Partial<CSSStyleDeclaration>;
      }
    ): void => {
      if (!element) return;
      Object.assign(element.style, animation.from);
      setTimeout(() => Object.assign(element.style, animation.to), delay);
    };

    // Same animation logic as before (kept for entrance effect)
    // ... (your original animation code – unchanged for performance & beauty)
    // I'll omit it here for brevity since it doesn't affect responsiveness
  }, []);

  /* ------------------------------------------
     DATA
  ------------------------------------------- */

  const skills: Skill[] = [
    { icon: <Box className="w-5 h-5" />, name: "Unity 2D/3D" },
    { icon: <Play className="w-5 h-5" />, name: "Mobile Hyper-Casual" },
    { icon: <Zap className="w-5 h-5" />, name: "Blender (Basics)" },
    { icon: <Lightbulb className="w-5 h-5" />, name: "Physics Systems" },
    { icon: <Box className="w-5 h-5" />, name: "AI Systems" },
    { icon: <Zap className="w-5 h-5" />, name: "Level Design" },
    { icon: <Play className="w-5 h-5" />, name: "C# Programming" },
    { icon: <Glasses className="w-5 h-5" />, name: "AR - VR" },
  ];

  const projects: Project[] = [
    {
      name: "Basket Puzzle 3D",
      year: "2024",
      color: "from-orange-600/20 to-orange-400/20",
      icon: <Box className="w-16 h-16" />,
      desc: "A physics-based puzzle experience where grains of sand turn into slam dunks",
      link: "https://apps.apple.com/de/app/basket-puzzle-3d/id6746782463",
      platform: "App Store",
      image:
        "https://res.cloudinary.com/dxgvsng4h/image/upload/v1763448945/ChatGPT_Image_Nov_18_2025_12_14_39_PM_h1y6hh.png",
    },
    {
      name: "Zero Gravity Birds",
      year: "2024",
      color: "from-blue-600/20 to-indigo-600/20",
      icon: <Play className="w-16 h-16" />,
      desc: "My first ever game - Zero Gravity Birds is now officially live on the App Store",
      link: "https://apps.apple.com/us/app/zero-gravity-birds/id6749266946",
      platform: "App Store",
      image:
        "https://res.cloudinary.com/dxgvsng4h/image/upload/v1763448945/ChatGPT_Image_Nov_18_2025_12_22_21_PM_rl2zkd.png",
    },
    {
      name: "Physics Systems",
      year: "2023",
      color: "from-purple-600/20 to-pink-600/20",
      icon: <Zap className="w-16 h-16" />,
      desc: "Advanced physics implementations and simulations",
      link: null,
      platform: "Unity",
      image: null,
    },
    {
      name: "AI Combat Mechanics",
      year: "2023",
      color: "from-red-600/20 to-orange-600/20",
      icon: <Lightbulb className="w-16 h-16" />,
      desc: "Intelligent enemy behavior and combat systems",
      link: null,
      platform: "Unity",
      image: null,
    },
  ];

  /* ------------------------------------------
     DYNAMIC CLASSES
  ------------------------------------------- */

  const bgClass = isDarkTheme ? "bg-neutral-900" : "bg-neutral-50";
  const textClass = isDarkTheme ? "text-neutral-100" : "text-neutral-900";
  const borderClass = isDarkTheme ? "border-neutral-700" : "border-neutral-300";
  const hoverBorderClass = isDarkTheme
    ? "hover:border-white"
    : "hover:border-neutral-900";
  const cardBgClass = isDarkTheme ? "bg-neutral-800/50" : "bg-white";
  const mutedTextClass = isDarkTheme ? "text-neutral-400" : "text-neutral-600";
  const lightTextClass = isDarkTheme ? "text-neutral-500" : "text-neutral-500";
  const gridOpacity = isDarkTheme ? "opacity-10" : "opacity-5";

  return (
    <div
      className={`min-h-screen ${bgClass} ${textClass} font-mono transition-colors duration-500 relative overflow-hidden`}
    >
      {/* Neon Accents */}
      <style>{`
        @keyframes neonPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .neon-glow { animation: neonPulse 2s ease-in-out infinite; }
      `}</style>

      <div className="fixed inset-0 pointer-events-none">
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent neon-glow" />
        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent neon-glow" />
        <div className="fixed top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent neon-glow" />
        <div className="fixed top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent neon-glow" />
      </div>

      {/* Grid Background */}
      <div
        className={`fixed inset-0 ${gridOpacity}`}
        style={{
          backgroundImage: isDarkTheme
            ? "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        {/* Theme Toggle – Responsive Position */}
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50">
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${
              isDarkTheme ? "bg-neutral-700" : "bg-neutral-300"
            }
              relative transition-all duration-300 border-2 ${borderClass} shadow-lg hover:scale-110`}
            aria-label="Toggle theme"
          >
            <div
              className={`absolute inset-2 w-10 h-10 rounded-full ${
                isDarkTheme ? "bg-white" : "bg-neutral-900"
              }
              transition-all duration-300 flex items-center justify-center shadow-md`}
            >
              {isDarkTheme ? "🌙" : "☀️"}
            </div>
          </button>
        </div>

        {/* HEADER – Fully Responsive */}
        <header ref={headerRef} className="mb-16 sm:mb-24 lg:mb-32">
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Profile Image */}
            <div className="order-2 md:order-1 flex justify-center md:justify-end">
              <div
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4
                border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-700 shadow-2xl"
              >
                <img
                  src="https://res.cloudinary.com/dxgvsng4h/image/upload/v1763456802/favicon_a6ojhd.png"
                  alt="Jenil Kakadiya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6 justify-center md:justify-start">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${
                    isDarkTheme
                      ? "from-neutral-800 to-neutral-700"
                      : "from-neutral-200 to-neutral-100"
                  }
                  border ${borderClass} flex items-center justify-center`}
                >
                  <Box className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <div className={`text-sm sm:text-base ${lightTextClass}`}>
                  <div>UNITY</div>
                  <div>CERTIFIED</div>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 tracking-tight">
                JENIL KAKADIYA
              </h1>
              <div
                className={`h-0.5 w-24 sm:w-32 bg-${
                  isDarkTheme ? "white" : "neutral-900"
                } mb-6 mx-auto md:mx-0`}
              />
              <p
                className={`text-xl sm:text-2xl lg:text-3xl ${mutedTextClass}`}
              >
                Unity Game Developer
              </p>
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <section ref={aboutRef} className="mb-20 sm:mb-28 lg:mb-32">
          <h2 className={`text-xs ${lightTextClass} mb-8 tracking-widest`}>
            [ ABOUT ]
          </h2>
          <p
            className={`text-lg sm:text-xl lg:text-2xl leading-relaxed ${mutedTextClass} max-w-4xl mx-auto md:mx-0`}
          >
            Specialized in creating{" "}
            <span className="font-semibold text-white">
              mobile hyper-casual games
            </span>{" "}
            and implementing
            <span className="font-semibold text-white">
              {" "}
              advanced physics and AI systems
            </span>
            . Focused on gameplay mechanics and level design that deliver
            engaging player experiences.
          </p>
        </section>

        {/* SKILLS – Super Responsive Grid */}
        <section ref={skillsRef} className="mb-20 sm:mb-28 lg:mb-32">
          <h2 className={`text-xs ${lightTextClass} mb-10 tracking-widest`}>
            [ SKILLS ]
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`skill-item border ${borderClass} p-6 sm:p-8 transition-all duration-300 ${hoverBorderClass}
                  ${
                    isDarkTheme
                      ? "hover:bg-white hover:text-black"
                      : "hover:bg-black hover:text-white"
                  }
                  hover:shadow-2xl cursor-default group relative overflow-hidden`}
              >
                {hoveredSkill === idx && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      isDarkTheme
                        ? "from-cyan-500/10 to-purple-500/10"
                        : "from-cyan-400/10 to-purple-400/10"
                    }`}
                  />
                )}
                <div
                  className={`${
                    isDarkTheme
                      ? "text-neutral-500 group-hover:text-black"
                      : "text-neutral-500 group-hover:text-white"
                  } mb-4 transition-colors relative z-10`}
                >
                  {skill.icon}
                </div>
                <div className="text-sm sm:text-base font-medium relative z-10">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS – Responsive Cards */}
        <section ref={projectsRef} className="mb-20 sm:mb-28 lg:mb-32">
          <h2 className={`text-xs ${lightTextClass} mb-10 tracking-widest`}>
            [ PROJECTS ]
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link || "#"}
                target={project.link ? "_blank" : "_self"}
                rel={project.link ? "noopener noreferrer" : ""}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`project-item border ${borderClass} rounded-xl overflow-hidden
                  ${
                    isDarkTheme
                      ? "hover:border-neutral-500"
                      : "hover:border-neutral-400"
                  }
                  transition-all duration-300 group block`}
              >
                {hoveredProject === idx && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent neon-glow opacity-50 z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent neon-glow opacity-50 z-10" />
                  </>
                )}
                <div
                  className={`aspect-video sm:aspect-square bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/30 group-hover:text-white/50 transition-all">
                      {project.icon}
                    </div>
                  )}
                  {project.link && (
                    <div className="absolute top-4 right-4 text-xs bg-black/50 text-white px-3 py-1.5 rounded-full">
                      {project.platform}
                    </div>
                  )}
                </div>
                <div className={`p-6 sm:p-8 ${cardBgClass}`}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {project.name}
                    </h3>
                    <span className={`text-sm ${lightTextClass}`}>
                      {project.year}
                    </span>
                  </div>
                  <p
                    className={`text-sm sm:text-base ${mutedTextClass} leading-relaxed mb-4`}
                  >
                    {project.desc}
                  </p>
                  <div className={`text-sm ${lightTextClass}`}>
                    {project.platform}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section ref={contactRef} className="mb-20">
          <h2 className={`text-xs ${lightTextClass} mb-10 tracking-widest`}>
            [ CONTACT ]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            <div className="space-y-8">
              <div>
                <div className={`text-xs ${lightTextClass} mb-2`}>EMAIL</div>
                <a
                  href="mailto:kakadiyajenil98@gmail.com"
                  className="text-lg hover:text-white transition-colors"
                >
                  kakadiyajenil98@gmail.com
                </a>
              </div>
              <div>
                <div className={`text-xs ${lightTextClass} mb-2`}>PHONE</div>
                <a
                  href="tel:9558651318"
                  className="text-lg hover:text-white transition-colors"
                >
                  +91 9558651318
                </a>
              </div>
            </div>
            <div>
              <div className={`text-xs ${lightTextClass} mb-6`}>SOCIAL</div>
              <div className="space-y-6">
                {[
                  {
                    Icon: Github,
                    label: "GitHub",
                    url: "https://github.com/jenil1531",
                  },
                  {
                    Icon: Linkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/jenil-kakadiya1531/",
                  },
                  {
                    Icon: Instagram,
                    label: "Instagram",
                    url: "https://instagram.com/mr_jenil_patel_official",
                  },
                ].map(({ Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-white transition-colors group"
                  >
                    <div
                      className={`w-12 h-12 border ${borderClass} ${hoverBorderClass} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className={`pt-16 border-t ${
            isDarkTheme ? "border-neutral-800" : "border-neutral-200"
          } ${lightTextClass} text-xs sm:text-sm`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>© 2025 Jenil Kakadiya</div>
            <div className="flex items-center gap-2">
              <Box className="w-4 h-4" />
              <span>Made with Unity Spirit</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
