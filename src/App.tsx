import { useEffect, useState } from "react";

import ChoiceButton from "./components/ChoiceButton";
import ScoreBoard from "./components/ScoreBoard";
import Rules from "./components/Rules";

import "./App.css";
import Selected from "./components/Selected";

function App() {
  const [playerPicked, setPlayerPicked] = useState(false);
  const [playerChoice, setPlayerChoice] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isGameOver) {
      localStorage.setItem("score", score.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver]);

  useEffect(() => {
    if (playerChoice) {
      setPlayerPicked(!playerPicked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerChoice]);

  useEffect(() => {
    if (localStorage.getItem("score") !== null) {
      setScore(+localStorage.getItem("score")!);
    } else {
      localStorage.setItem("score", score.toString());
    }
  }, [score]);

  return (
    <div className='pt-10 p-5 flex flex-col items-center'>
      <ScoreBoard score={score} />
      {playerPicked ? (
        <Selected
          setScore={setScore}
          score={score}
          isGameOver={isGameOver}
          setGameState={setIsGameOver}
          playerChoice={playerChoice}
        />
      ) : (
        <div
          id='board'
          className='w-full max-w-2xl grid grid-flow-row grid-cols-2 place-items-center gap-20'
        >
          <ChoiceButton
            choice='rock'
            color='border-indigo-500'
            setChoice={setPlayerChoice}
          />
          <ChoiceButton
            choice='scissors'
            color='border-yellow-500'
            setChoice={setPlayerChoice}
          />
          <ChoiceButton
            span={true}
            choice='paper'
            color='border-red-500'
            setChoice={setPlayerChoice}
          />
        </div>
      )}
      <Rules />
    </div>
  );
}

export default App;
