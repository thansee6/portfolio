import { useState } from 'react';
import Hero from '../components/Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Modal from '../components/Modal';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <main className="overflow-x-hidden">

      <section id="home">
        <Hero onOpenModal={() => setShowWelcome(true)} />
      </section>

      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

      <Modal 
        isOpen={showWelcome} 
        onClose={() => setShowWelcome(false)} 
        title="Glad you're here!"
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm currently open for full-time positions. 
          Let's build something amazing together!
        </p>
      </Modal>

    </main>
  );
};
export default Home;