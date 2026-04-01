import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = ({ isHome }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMessage('');

    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      setErrorMessage("Configuration error: EmailJS credentials are missing in the .env file. If you just added them, please restart your Vite server!");
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        title: "Portfolio Contact Form",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setErrorMessage(`Failed to send message: ${error.text || error.message || 'Check EmailJS configuration'}`);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <motion.div
      initial={isHome ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
      whileInView={isHome ? { opacity: 1, y: 0 } : undefined}
      viewport={isHome ? { once: true, amount: 0.2 } : undefined}
      transition={isHome ? { duration: 0.6 } : undefined}
      className="py-20 max-w-xl mx-auto px-6"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">Get in Touch</h2>
        <p className="text-gray-500 dark:text-gray-400">Have a question or want to work together?</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-50 dark:border-gray-800 transition-colors duration-300">

        {success && (
          <div className="p-4 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl text-center font-medium">
            Message sent successfully!
          </div>
        )}

        {errorMessage && (
          <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl text-center font-medium">
            {errorMessage}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name "
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition`}
            placeholder="mail"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition`}
            placeholder="Tell me about your project..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-bold text-white transition transform active:scale-[0.98] ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;