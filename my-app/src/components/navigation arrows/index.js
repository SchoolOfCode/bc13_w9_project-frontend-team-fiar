import { useState, useEffect } from "react";
import "./index.css";

export function NavigationArrows({ props }) {
  return (
    <div>
      <button onClick={props.PreviousWeek}>Previous</button>
      <button onClick={props.NextWeek}>Next</button>
    </div>
  );
}
