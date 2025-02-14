const Button = ({ children, onClick, className }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${className} text-primary hover:bg-button flex cursor-pointer items-center justify-center rounded-lg p-3`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
