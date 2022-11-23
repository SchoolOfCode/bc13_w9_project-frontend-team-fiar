//import { useState, useEffect } from "react";
import "./index.css";

export function Dropdown() {
  // make a list item component to change state of week
  return (
    <ul>
      <li id="week1">
        <button>week 1</button>
      </li>
      <li id="week2">
        <button>week 2</button>
      </li>
    </ul>
  );
}

export default Dropdown;
