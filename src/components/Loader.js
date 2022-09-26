import React from 'react';

const Loader = ({isLoading = false, ...props}) => (
  <div className='relative'>
    {isLoading &&(
      <div
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-200 opacity-50 flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"/>
      </div>
    )}
    {props.children}
  </div>
);

export default Loader;