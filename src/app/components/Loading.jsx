// src/components/Loading.js

import React from 'react';

const Loading = ({ message = "Loading..." }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 border-2 border-stayro border-t-transparent border-solid rounded-full animate-spin mb-4"></div>
            </div>
        </div>
    );
};

export default Loading;
