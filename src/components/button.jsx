const Button = ({ children, onClick, className }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${className} text-primary flex items-center cursor-pointer justify-center rounded-lg p-3 hover:bg-button`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
