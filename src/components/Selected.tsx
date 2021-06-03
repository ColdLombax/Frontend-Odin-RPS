import React, { useEffect, useState } from "react";

import ChoiceButton from "./ChoiceButton";
import GameOver from "./GameOver";

type PropTypes = {
  playerChoice: string;
  setGameState: any;
  isGameOver: boolean;
};

function Selected({ playerChoice, setGameState, isGameOver }: PropTypes) {
  const [computerChoice, setComputerChoice] = useState("");

  const handleComputerChoice = () => {
    const value = Math.floor(Math.random() * 3);
    switch (value) {
      case 0:
        setComputerChoice("paper");
        break;
      case 1:
        setComputerChoice("rock");
        break;
      case 2:
        setComputerChoice("scissors");
        break;
    }
  };

  useEffect(() => {
    setTimeout(handleComputerChoice, 1000);
  }, []);

  useEffect(() => {
    if (computerChoice) {
      console.log(computerChoice);
      console.log(playerChoice);
    }
  }, [computerChoice]);

  return (
    <div className='flex gap-5 mt-10 sm:gap-40 sm:'>
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
      {isGameOver && <GameOver message='hello' />}
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
