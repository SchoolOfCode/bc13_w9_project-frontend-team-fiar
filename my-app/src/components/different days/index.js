import { useState, useEffect } from "react";
import "./index.css";

export function DifferentDays() {
  // we need a function to pull the different days
  // the button will have 5 days which will reference the week and return a state based on the date
  // How will we pull from the database, how can we tell the computer which week is week 2 and day 3 for eg
  function GetDay() {
    //reference SQL table to fetch (get) data from - posts table and comments (join) table
  }
  return (
    <div>
      <button>Monday</button>
      <button>Tuesday</button>
      <button>Wednesday</button>
      <button>Thursday</button>
      <button>Friday</button>
    </div>
  );
}

export default DifferentDays;
