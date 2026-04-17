import { motion } from 'framer-motion';
const About = ({ isHome }) => (
  <motion.div 
    initial={isHome ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
    whileInView={isHome ? { opacity: 1, y: 0 } : undefined}
    viewport={isHome ? { once: true, amount: 0.3 } : undefined}
    transition={isHome ? { duration: 0.6 } : undefined}
    className="py-20 flex flex-col items-center text-center max-w-3xl mx-auto px-6"
  >
    <div className="w-full">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        I’m a developer who loves bridging the gap between design and code. 
      </p>
      <p className="text-gray-600 mb-6">
        With 1+ years of experience in the React ecosystem, I specialize in:
      </p>
      <ul className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-blue-600">
        <li>▹ React </li>
        <li>▹ Tailwind CSS</li>
        <li>▹ JavaScript</li>
      </ul>
    </div>
  </motion.div>
);

export default About;