import { memo } from 'react';
import { motion } from 'framer-motion';

const Modal = memo(({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 shadow-2xl transform transition-all"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold dark:text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <div className="dark:text-gray-300">
          {children}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-bold"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;