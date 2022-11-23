import React from "react";
import "./App.css";
import { useState, useEffect, useReducer } from "react";
//import NavigationArrows from "../navigation arrows";
import Header from "../header";
import Sidebar from "../sidebar";
import MainSection from "../main-section";
// For navbar
// import all of the route handlers "week 1 to 16"
// within function app return the navbar and the routes nested within the header
//

function App() {
  const initialState = 1;
  const [count, dispatch] = useReducer(reducer, initialState);
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  console.log(count)
  
  useEffect(() => {
    async function callURL() {
      const response = await fetch(`http://localhost:3050/api/posts/?week=${count}`);
      const data = await response.json();
      setPosts([data.payload[0].contents]);
      console.log('Posts', data.payload[0].contents
      );
    }
    callURL();
  }, [count]);


  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        if (state <= 1) {
          return initialState;
        } else {
          return state - 1;
        }
      default:
        return state;
    }
  }

  return (
    <div className='App'>
      <title>FIAR APP</title>
      <Header count={count} dispatch={dispatch} />

      <div className='sidebar-main'>
        <Sidebar />
        <MainSection posts={posts} comments={comments}/>
        <p>{posts}</p>
      </div>
      
    </div>
  );
}

export default App;
//inside header
// - navigation arrows
// - dropdown

//inside Sidebar
// - different days

//main-section
// - morning/afternoon buttons
// - post section
// - comments section

/*
line 7 = name in the tab

line 8 = header section which includes navigation arrows, dropdown

line 10 = Sidebar which includes the different days

line 12 = main-section which has morning/afternooon buttons, post & comments section
*/
