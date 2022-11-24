import React from "react";

function MorningAfternoonButtons({ handleTime }) {
  return (
    <div className='morningAfternoonButtons'>
      <button className='navButton' id='morning-afternoon' onClick={() => handleTime(true)}>Morning</button>
      <button className='navButton' id='morning-afternoon' onClick={() => handleTime(false)}>Afternoon</button>
    </div>
  );
}

export default MorningAfternoonButtons;
