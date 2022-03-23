import "./LoaderWrapper.css";

const LoaderWrapper = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <div className="loader-wrapper flex-center">
          <div className="loader"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoaderWrapper;
