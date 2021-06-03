import React from "react";

type PropTypes = {
  message: string;
};

function GameOver({ message }: PropTypes) {
  return (
    <div className='absolute left-0 bottom-20 w-full flex flex-col justify-center items-center p-5 lg:relative'>
      <h2 className='text-2xl mb-2 sm:text-6xl sm:mb-5'>{message}</h2>
      <p
        className='bg-white text-gray-700 text-md pl-10 pr-10 p-2 rounded-xl sm:pl-14 sm:pr-14 sm:p-4'
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }}
      >
        PLAY AGAIN
      </p>
    </div>
  );
}

export default GameOver;
