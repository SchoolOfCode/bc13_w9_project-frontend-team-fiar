//import { useState, useEffect } from "react";
import "./index.css";
import { NavigationArrows } from "../navigation arrows";
import Dropdown from "../dropdown";
// For navbar
// import all of the route handlers "week 1 to 16"
// within function app return the navbar and the routes nested within the header
//

function Header() {
  return (
    <div>
      <h1>Week Title</h1>
      <NavigationArrows />
      <Dropdown />
    </div>
  );
}

export default Header;
