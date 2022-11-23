import React from "react";

function MorningAfternoonButtons({ handleTime }) {
  return (
    <div>
      <button onClick={() => handleTime(true)}>Morning</button>
      <button onClick={() => handleTime(false)}>Afternoon</button>
    </div>
  );
}

export default MorningAfternoonButtons;
