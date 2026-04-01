import { useState, lazy, Suspense, useCallback } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Modal from '../components/Modal';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const handleOpenModal = useCallback(() => setShowWelcome(true), []);
  const handleCloseModal = useCallback(() => setShowWelcome(false), []);

  return (
    <div>

      <section id="home">
        <Hero onOpenModal={handleOpenModal} />
      </section>

      <Suspense fallback={<div className="h-96"></div>}>
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <About />
        </motion.section>
        
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.section>
        
        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.section>
      </Suspense>

      <Modal
        isOpen={showWelcome}
        onClose={handleCloseModal}
        title="Glad you're here!"
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm currently open for full-time positions.
          Let's build something amazing together!
        </p>
      </Modal>

    </div>
  );
};
export default Home;