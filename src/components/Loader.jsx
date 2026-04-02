import { motion } from 'framer-motion';

const Loader = () => {
  const text = "Thanseeh";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-900 dark:bg-black overflow-hidden">
      <div className="font-mono text-xl md:text-3xl font-bold text-green-400 dark:text-green-500 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">
        <motion.span
          variants={container}
          initial="hidden"
          animate="show"
        >

          {text.split('').map((char, index) => (
            <motion.span key={index} variants={item}>
              {char}
            </motion.span>
          ))}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 0.7, repeatType: "mirror" }}
          className="inline-block w-[6px] md:w-[10px] h-[1em] bg-green-400 ml-1 align-middle"
        />
      </div>
    </div>
  );
};

export default Loader;