import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import FloatingContact from './components/FloatingContact';
import { Themecontext } from './components/context';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Themecontext.Provider value={{theme,setTheme}}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">

        <Navbar />

        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </Themecontext.Provider>
    </Router>
  );
}
export default App;