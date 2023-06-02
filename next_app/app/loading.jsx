import React from 'react';

const LoadingPage = () => {
    return (
        <div className='container text-center m-auto'>
            <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingPage;