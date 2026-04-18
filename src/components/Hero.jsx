import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = memo(({ onOpenModal }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-slate-50 dark:bg-[#050505] text-slate-800 dark:text-slate-200 transition-colors duration-500 overflow-hidden isolate">
      
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]"></div>

        {/* Floating gradient orbs */}
        <motion.div 
          animate={{ 
            x: mousePosition.x * 30, 
            y: mousePosition.y * 30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500/20 dark:bg-blue-600/10 mix-blend-multiply dark:mix-blend-screen filter blur-[80px] sm:blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: mousePosition.x * -40, 
            y: mousePosition.y * -40,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
          className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/20 dark:bg-purple-600/10 mix-blend-multiply dark:mix-blend-screen filter blur-[80px] sm:blur-[100px] rounded-full" 
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Mini badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new projects
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 tracking-tight leading-[1.1]"
        >
          <span className="block text-slate-800 dark:text-slate-100">Hey, I'm Thanseeh</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
            Front-End Developer.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Crafting exceptional digital experiences with a focus on beautiful interfaces and seamless performance using 
          <span className="text-slate-900 dark:text-slate-100 font-semibold"> React </span> & 
          <span className="text-slate-900 dark:text-slate-100 font-semibold"> Tailwind CSS</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-transform shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-xl"
          >
            <span className="relative z-10">View My Work</span>
            <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 rounded-full border border-white/20 dark:border-black/20 z-10"></div>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white dark:bg-[#111] border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 text-slate-800 dark:text-slate-300 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm hover:shadow-md backdrop-blur-sm"
          >
            Say Hello 👋
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
});

export default Hero;