const Button = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="text-primary flex items-center cursor-pointer justify-center rounded-lg p-2 hover:bg-button"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
