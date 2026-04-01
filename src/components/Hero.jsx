import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = memo(({ onOpenModal }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full"></div>
        <img
          src="image.jpg"
           alt="Thanseeh"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
        />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter"
      >
        Hi, I’m <span className="text-blue-600">Thanseeh</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed"
      >
        Building high-performance, beautiful web experiences with
        <span className="text-gray-900 dark:text-white font-semibold"> React & Tailwind CSS.</span>
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="flex flex-wrap justify-center gap-5"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/25 block"
        >
          View My Work
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenModal}
          className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold transition-colors"
        >
          Say Hello 👋
        </motion.button>
      </motion.div>

    </section>
  );
});

export default Hero;