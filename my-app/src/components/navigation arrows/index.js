import { useState, useEffect, useReducer } from "react";
import "./index.css";

export function NavigationArrows({ dispatch }) {
  //function
  //get week id
  //change week by +1 or -1
  //set state to new week Id
  // render page with new url (changed weekId)
  //const[weekId, setWeekId] =useState(count)
  // const initialState = 1;

  return (
    <div>
      <button className='navButton' onClick={() => dispatch({ type: "decrement" })}>← Previous</button>
      <button className='navButton' onClick={() => dispatch({ type: "increment" })}>Next →</button>
    </div>
  );
}

// async function getWeekById (){

// }

// http:localhost/week{id}/wedn (+1/-1)

//var Prectdate = new Date();
//date.setDate(date.getDate() - 7);
//<p>{DayOfWeek}<p/>

// async function NextWeek() {}
//onClick={props.PreviousWeek}>Previous
//onClick={props.NextWeek}>Next
