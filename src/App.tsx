import ChoiceButton from "./components/ChoiceButton";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <div className='pt-10 p-5 flex flex-col items-center'>
      <ScoreBoard />
      <div className='w-full max-w-2xl grid'>
        <ChoiceButton />
      </div>
    </div>
  );
}

export default App;
