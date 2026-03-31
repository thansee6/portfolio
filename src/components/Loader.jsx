const Loader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white dark:bg-black">
      <div className="relative">
      
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
       
        <p className="mt-4 text-blue-600 font-bold animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;