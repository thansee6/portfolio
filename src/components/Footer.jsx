import { memo } from 'react';

const Footer = memo(() => (
  <footer className="bg-gray-900 text-white py-8 mt-auto">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p>© Portfolio. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6 text-gray-400">
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">GitHub</a>
        <a href="#" className="hover:text-white">LinkedIn</a>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;