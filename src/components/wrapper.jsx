const Wrapper = ({ children }) => {
  return (
    <>
      <div
        className={`bg-background text-primary flex h-full min-h-screen flex-col font-sans font-medium`}
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;
