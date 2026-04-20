
import { motion } from 'framer-motion';
import projectsData from "../projects.json";

const Projects = ({ isHome }) => {
  return (
    <motion.section
      initial={isHome ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
      whileInView={isHome ? { opacity: 1, y: 0 } : undefined}
      viewport={isHome ? { once: true, amount: 0.1 } : undefined}
      transition={isHome ? { duration: 0.6 } : undefined}
      className="py-24 bg-bg-base transition-colors duration-300 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Recent <span className="text-brand">Work</span>
          </h2>
          <div className="h-1.5 w-20 bg-brand mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-bg-card rounded-[2rem] overflow-hidden border border-gray-800 hover:border-brand/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-medium text-sm">View Details →</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand bg-brand-muted px-3 py-1 rounded-full">
                    {project.tech}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-bold text-white hover:text-brand transition-colors"
                >
                  GitHub Repository
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Projects;