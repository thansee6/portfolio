import { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = memo(({ onOpenModal }) => {
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = "const developer = {\n  name: 'Thanseeh',\n  skills: ['React', 'Tailwind CSS', 'JavaScript'],\n  passion: 'Building high-performance web experiences',\n  status: 'Ready for new challenges'\n};\n\n> System initialized successfully.\n> Ready for user interaction...";

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      setText(fullText.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex <= fullText.length) {
        setTimeout(typeText, Math.random() * 30 + 10); // Random typing speed
      } else {
        setIsTypingComplete(true);
      }
    };
    
    // Start typing after a short delay
    const startDelay = setTimeout(typeText, 900);
    return () => clearTimeout(startDelay);
  }, [fullText]);

  return (
    <section className="min-h-screen pt-20 pb-10 flex flex-col justify-center items-center px-4 sm:px-6 bg-slate-50 dark:bg-[#0a0a0a] text-slate-800 dark:text-slate-200 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/5 filter blur-3xl rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-4xl relative z-10"
      >
        <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/20 border border-slate-300 dark:border-slate-800">
          
          {/* Terminal Window Header */}
          <div className="bg-[#161B22] px-4 py-3 flex items-center justify-between border-b border-slate-300 dark:border-slate-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="text-slate-400 text-xs font-mono font-medium flex-1 text-center">
              guest@thanseeh-portfolio: ~
            </div>
            <div className="w-14"></div> {/* Spacer for centering */}
          </div>
          
          {/* Terminal Window Body */}
          <div className="p-5 sm:p-8 font-mono text-sm sm:text-base min-h-[450px] flex flex-col relative text-left">
            
            {/* Command 1: whoami */}
            <div className="mb-6">
              <div className="flex gap-2 text-slate-300">
                <span className="text-[#27C93F] font-semibold">guest@thanseeh</span>
                <span>:</span>
                <span className="text-blue-400 font-semibold">~</span>
                <span>$</span>
                <span className="text-slate-100">whoami</span>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-slate-200 font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tighter"
              >
                Hi, I’m <span className="text-blue-500">Thanseeh</span>
              </motion.div>
            </div>

            {/* Command 2: cat profile.js */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-3"
            >
              <div className="flex gap-2 text-slate-300">
                <span className="text-[#27C93F] font-semibold">guest@thanseeh</span>
                <span>:</span>
                <span className="text-blue-400 font-semibold">~</span>
                <span>$</span>
                <span className="text-slate-100">cat profile.js</span>
              </div>
            </motion.div>

            {/* Typing Animation Area */}
            <div className="text-slate-300 whitespace-pre-wrap flex-1 leading-relaxed">
              {text.split('\n').map((line, i) => {
                let lineClass = "text-slate-300";
                if (line.includes("const developer") || line.includes("};")) lineClass = "text-purple-400";
                else if (line.includes("name:") || line.includes("skills:") || line.includes("passion:") || line.includes("status:")) lineClass = "text-blue-300";
                else if (line.includes("'")) lineClass = "text-[#27C93F]";
                else if (line.startsWith(">")) lineClass = "text-slate-400 italic";
                
                return (
                  <div key={i} className={lineClass}>
                    {line}
                    {i === text.split('\n').length - 1 && !isTypingComplete && (
                      <motion.span 
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2.5 h-5 bg-slate-300 align-middle ml-1"
                      />
                    )}
                  </div>
                );
              })}
              
              {isTypingComplete && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 text-slate-300 mt-3"
                >
                  <span className="text-[#27C93F] font-semibold">guest@thanseeh</span>
                  <span>:</span>
                  <span className="text-blue-400 font-semibold">~</span>
                  <span>$</span>
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-5 bg-slate-300 align-middle ml-1 mt-0.5"
                  />
                </motion.div>
              )}
            </div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-slate-800"
            >
              <a
                href="#projects"
                className="group relative px-6 py-3 font-mono font-bold text-[#27C93F] bg-[#27C93F]/10 rounded border border-[#27C93F]/30 hover:bg-[#27C93F]/20 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">./view-projects.sh</span>
                <div className="absolute inset-0 h-full w-0 bg-[#27C93F]/10 group-hover:w-full transition-all duration-300 ease-out"></div>
              </a>

              <button
                onClick={onOpenModal}
                className="group relative px-6 py-3 font-mono font-bold text-blue-400 bg-blue-400/10 rounded border border-blue-400/30 hover:bg-blue-400/20 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">sudo contact --me</span>
                <div className="absolute inset-0 h-full w-0 bg-blue-400/10 group-hover:w-full transition-all duration-300 ease-out"></div>
              </button>
            </motion.div>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
});

export default Hero;