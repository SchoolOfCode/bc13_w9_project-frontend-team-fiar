//import { useState, useEffect } from "react";
import "./index.css";
import MorningAfternoonButtons from "../morning and afternoon buttons";
function Sidebar({ handleDay, handleTime }) {
  return (
    <div className="day-buttons">
      <MorningAfternoonButtons handleTime={handleTime} />
      <button className="buttonday" onClick={() => handleDay("mon")}>
        Monday
      </button>
      <button className="buttonday" onClick={() => handleDay("tue")}>
        Tuesday
      </button>
      <button className="buttonday" onClick={() => handleDay("wed")}>
        Wednesday
      </button>
      <button className="buttonday" onClick={() => handleDay("thu")}>
        Thursday
      </button>
      <button className="buttonday" onClick={() => handleDay("fri")}>
        Friday
      </button>
    </div>
  );
}

export default Sidebar;
