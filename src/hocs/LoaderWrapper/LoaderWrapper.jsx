const LoaderWrapper = ({ isLoading ,  children }) => {
    return (
        <>
            {isLoading ? ('Loading...') : children}
        </>
    );
};

export default LoaderWrapper;
