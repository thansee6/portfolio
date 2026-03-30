import { Link } from "react-router-dom";
import { useState } from 'react';
import Modal from '../components/Modal';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    // Changed bg-black to be dynamic (bg-white for light, dark:bg-black for dark)
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Profile Image - Added a placeholder URL so you can see it */}
      <img
        src="https://via.placeholder.com/150" 
        alt="Profile"
        className="w-32 h-32 rounded-full mb-6 border-4 border-blue-500 object-cover"
      />

      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Hi, I’m <span className="text-blue-500">Thanseeh</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
        I build modern, responsive web applications using React, Tailwind CSS.
      </p>

      <p className="text-sm text-gray-400 dark:text-gray-500 mb-8 font-mono">
        React • Vite • Tailwind CSS • Framer Motion • TypeScript
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          View Projects
        </Link>

        <Link
          to="/contact"
          className="border border-gray-300 dark:border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition"
        >
          Contact Me
        </Link>

        <button 
          onClick={() => setShowWelcome(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition transform hover:scale-105"
        > 
          Thanks
        </button>
      </div> 
      {/* Modal logic */}
      <Modal 
        isOpen={showWelcome} 
        onClose={() => setShowWelcome(false)} 
        title="Welcome!"
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Thanks for visiting my portfolio! 
        </p>
      </Modal>

    </section>
  );
};

export default Home;