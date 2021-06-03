import React, { useEffect, useState } from "react";

import ChoiceButton from "./ChoiceButton";

type PropTypes = {
  playerChoice: string;
};

function Selected({ playerChoice }: PropTypes) {
  const [computerChoice, setComputerChoice] = useState("");

  const handleComputerChoice = () => {
    const value = Math.floor(Math.random() * 2);
    setComputerChoice("paper");
  };

  useEffect(() => {
    setTimeout(handleComputerChoice, 1000);
  }, []);

  return (
    <div className='flex gap-5 mt-10 sm:gap-60'>
      <div className='flex flex-col-reverse items-center gap-5 sm:text-2xl sm:flex-col'>
        <h2>YOU PICKED</h2>
        <ChoiceButton
          choice={playerChoice}
          color={
            playerChoice === "rock"
              ? "border-indigo-500"
              : playerChoice === "paper"
              ? "border-red-500"
              : "border-yellow-500"
          }
        />
      </div>
      <div className='flex flex-col-reverse items-center gap-5 sm:text-2xl sm:flex-col'>
        <h2>THE HOUSE PICKED</h2>
        {computerChoice ? (
          <ChoiceButton
            choice={computerChoice}
            color={
              computerChoice === "rock"
                ? "border-indigo-500"
                : computerChoice === "paper"
                ? "border-red-500"
                : "border-yellow-500"
            }
          />
        ) : (
          <div className='w-28 h-28 bg-indigo-700 rounded-full sm:w-48 sm:h-48' />
        )}
      </div>
    </div>
  );
}

export default Selected;
