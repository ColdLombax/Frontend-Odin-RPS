import React from "react";

import rock from "../images/icon-rock.svg";

function ChoiceButton() {
  return (
    <div className='w-28 h-28 bg-white rounded-full flex flex-col justify-center items-center border-20 border-indigo-500 sm:w-48 sm:h-48'>
      <img src={rock} alt='rock icon' className='w-1/2' />
    </div>
  );
}

export default ChoiceButton;
