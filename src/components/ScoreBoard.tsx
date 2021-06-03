import React from "react";

function ScoreBoard() {
  return (
    <div
      id='score-board'
      className=' text-xl flex justify-center items-center pl-4 p-5 border-4 border-gray-400 rounded-xl w-full max-w-2xl mb-5 sm:text-4xl sm:mb-20'
    >
      <h1 className='leading-none'>
        Rock
        <br />
        Paper
        <br />
        Scissors
      </h1>
      <section className='ml-auto bg-gray-100 p-2 text-center rounded-xl text-gray-600 w-1/3 h-full flex flex-col items-center justify-center sm:w-1/4'>
        <h3 className='text-blue-700 text-xs sm:text-lg'>SCORE</h3>
        <p className='text-4xl sm:text-6xl'>12</p>
      </section>
    </div>
  );
}

export default ScoreBoard;
