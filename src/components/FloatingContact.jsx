import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingContact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate('/contact');
      setTimeout(() => window.scrollTo(0, 0), 0);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: top - offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <div className="relative group">
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
          Let's Chat!
        </span>

        <motion.button
          onClick={handleClick}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="p-4 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-500/50 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500/50 flex items-center justify-center"
          aria-label="Contact Me"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingContact;
