//import { useState, useEffect } from "react";
import "./index.css";
import MorningAfternoonButtons from "../morning and afternoon buttons";
function Sidebar({ handleDay, handleTime }) {
  return (
    <div className="day-buttons">
      <MorningAfternoonButtons handleTime={handleTime} />
      <button onClick={() => handleDay("mon")}>Monday</button>
      <button onClick={() => handleDay("tue")}>Tuesday</button>
      <button onClick={() => handleDay("wed")}>Wednesday</button>
      <button onClick={() => handleDay("thu")}>Thursday</button>
      <button onClick={() => handleDay("fri")}>Friday</button>
    </div>
  );
}

export default Sidebar;
