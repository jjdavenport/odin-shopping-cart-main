const Wrapper = ({ children }) => {
  return (
    <>
      <div
        className={`bg-background font-medium flex flex-col font-sans text-primary h-full min-h-screen`}
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;
