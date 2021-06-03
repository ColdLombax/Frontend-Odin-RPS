import ChoiceButton from "./components/ChoiceButton";
import ScoreBoard from "./components/ScoreBoard";

import "./App.css";

function App() {
  return (
    <div className='pt-10 p-5 flex flex-col items-center'>
      <ScoreBoard />
      <div
        id='board'
        className='w-full max-w-2xl grid grid-flow-row grid-cols-2 place-items-center gap-20'
      >
        <ChoiceButton span={false} choice='rock' color='border-indigo-500' />
        <ChoiceButton
          span={false}
          choice='scissors'
          color='border-yellow-500'
        />
        <ChoiceButton span={true} choice='paper' color='border-red-500' />
      </div>
    </div>
  );
}

export default App;
