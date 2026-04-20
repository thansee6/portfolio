
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-bg-card border border-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl transform transition-all"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300 text-2xl">&times;</button>
        </div>
        <div className="text-gray-300">
          {children}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-brand text-black hover:bg-brand-hover py-2 rounded-lg font-bold transition-colors"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;