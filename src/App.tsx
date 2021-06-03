import ChoiceButton from "./components/ChoiceButton";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <div className='pt-10 p-5 flex flex-col items-center'>
      <ScoreBoard />
      <div className='w-full max-w-2xl grid'>
        <ChoiceButton choice='rock' />
        <ChoiceButton choice='scissors' />
        <ChoiceButton choice='paper' />
      </div>
    </div>
  );
}

export default App;
