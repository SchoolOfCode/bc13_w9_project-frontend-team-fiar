//import { useState, useEffect } from "react";
import "./index.css";
import { NavigationArrows } from "../navigation arrows";
import { useState, useEffect, useReducer } from "react";
// For navbar
// import all of the route handlers "week 1 to 16"
// within function app return the navbar and the routes nested within the header
//

function Header({count, dispatch}) {

  return (
    <div>
      <h1>Week {count}</h1>
      <NavigationArrows dispatch={dispatch}/>
    </div>
  );
}

export default Header;
