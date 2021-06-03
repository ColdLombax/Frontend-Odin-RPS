import React from "react";

import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";

type PropTypes = {
  choice: string;
  span?: boolean;
  color: string;
  setChoice?: any;
};

function ChoiceButton({ choice, span, color, setChoice }: PropTypes) {
  const clickHandler = () => {
    if (setChoice) {
      setChoice(choice);
    }
  };
  return (
    <div
      className={`w-28 h-28 bg-white cursor-pointer rounded-full flex flex-col justify-center items-center border-20 ${color} sm:w-48 sm:h-48  ${
        span ? "col-span-2" : ""
      }`}
      onClick={clickHandler}
    >
      <img
        src={choice === "rock" ? rock : choice === "paper" ? paper : scissors}
        alt={`${
          choice === "rock" ? rock : choice === "paper" ? paper : scissors
        } icon`}
        className='w-1/2'
      />
    </div>
  );
}

export default ChoiceButton;
