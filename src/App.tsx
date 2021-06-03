import { useState } from "react";

import ChoiceButton from "./components/ChoiceButton";
import ScoreBoard from "./components/ScoreBoard";
import Rules from "./components/Rules";

import "./App.css";

function App() {
  const [playerPicked, setPlayerPicked] = useState(true);
  const [playerChoice, setPlayerChoice] = useState("");

  return (
    <div className='pt-10 p-5 flex flex-col items-center'>
      <ScoreBoard />
      {playerPicked ? (
        <div className='flex gap-5 sm:gap-60'>
          <div className='flex flex-col items-center gap-5 sm:text-2xl'>
            <h2>YOU PICKED</h2>
            <ChoiceButton choice={"rock"} color='border-indigo-500' />
          </div>
          <div className='flex flex-col items-center gap-5 sm:text-2xl'>
            <h2>THE HOUSE PICKED</h2>
            <ChoiceButton choice={"scissors"} color='border-red-500' />
          </div>
        </div>
      ) : (
        <div
          id='board'
          className='w-full max-w-2xl grid grid-flow-row grid-cols-2 place-items-center gap-20'
        >
          <ChoiceButton choice='rock' color='border-indigo-500' />
          <ChoiceButton choice='scissors' color='border-yellow-500' />
          <ChoiceButton span={true} choice='paper' color='border-red-500' />
        </div>
      )}
      <Rules />
    </div>
  );
}

export default App;
