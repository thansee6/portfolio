const Contact = () => (
  <div className="py-20 max-w-xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-500">Have a question or want to work together?</p>
    </div>
    <form className="space-y-6 bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="hello@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Tell me about your project..."></textarea>
      </div>
      <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition transform active:scale-[0.98]">
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;