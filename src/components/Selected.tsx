import React from "react";

import ChoiceButton from "./ChoiceButton";

function Selected() {
  return (
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
  );
}

export default Selected;
