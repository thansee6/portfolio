import { Link } from "react-router-dom";

const Hero = ({ onOpenModal }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">

      <div className="relative mb-8">
        <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full"></div>
        <img
          src="https://via.placeholder.com/150"
          alt="Thanseeh"
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
        Hi, I’m <span className="text-blue-600">Thanseeh</span>
      </h1>

      <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
        Building high-performance, beautiful web experiences with
        <span className="text-gray-900 dark:text-white font-semibold"> React & Tailwind CSS.</span>
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
        >
          View My Work
        </a>

        <button
          onClick={onOpenModal}
          className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        >
          Say Hello 👋
        </button>
      </div>

    </section>
  );
};

export default Hero;