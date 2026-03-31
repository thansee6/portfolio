import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [darkMode, setDarkMode] = useState(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', id: '/', href: '/' },
    { name: 'About', id: 'about', href: '/about' },
    { name: 'Projects', id: 'projects', href: '/projects' },
    { name: 'Contact', id: 'contact', href: '/contact' },
  ];

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.6,
    });

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: top - offset, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleLinkClick = (link) => {
    navigate(link.href);

    if (link.href === '/') {
      scrollToSection('home');
    } else {
      scrollToSection(link.id);
    }

    setIsOpen(false);
  };

  const navLinkStyles = ({ isActive }) => `
    text-lg font-medium transition-all duration-300 relative py-1
    ${isActive 
      ? 'text-blue-600 dark:text-blue-400' 
      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}
  `;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
        : 'bg-white dark:bg-gray-900 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <Link to="/" className="text-3xl font-extrabold text-blue-600 tracking-tighter">
          Thanseeh
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.href} className={navLinkStyles}>
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-400 transition-all"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
            {darkMode ? '🌙' : '☀️'}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`
        absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-800 
        transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsOpen(false)}
              className={navLinkStyles}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;