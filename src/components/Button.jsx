const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95";
  const variants = {
    primary: "bg-brand text-black hover:bg-brand-hover shadow-lg shadow-brand/20",
    secondary: "bg-gray-800 text-gray-200 hover:bg-gray-700",
    outline: "border-2 border-brand text-brand hover:bg-brand-muted"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;