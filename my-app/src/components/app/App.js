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
  const [posts, setPosts] = useState([null]);
  const [fetchData, setFetchData] = useState([]);
  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    console.log(count)
    async function callURL() {
      const response = await fetch(
        `http://localhost:3050/api/posts/?week=${count}` 
      );
      const data = await response.json();
      setFetchData([...data.payload]);
      console.log(data)
      console.log("Fetch", data.payload[0].contents);
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

  function handleDay(day) {
    if (day === "mon") {
      const filteredPosts = fetchData.filter((item) => {
        return item.day_posted === "mon";
      });
      console.log(filteredPosts)
      setPosts(filteredPosts);
      setSinglePost(filteredPosts);
    }
    if (day === "tue") {
      const filteredPosts = fetchData.filter((posts) => {
        return posts.day_posted === "tue";
      });
      setPosts(filteredPosts);
      setSinglePost(filteredPosts);
    }
    if (day === "wed") {
      const filteredPosts = fetchData.filter((posts) => {
        return posts.day_posted === "wed";
      });
      setPosts(filteredPosts);
      setSinglePost(filteredPosts);
    }
    if (day === "thu") {
      const filteredPosts = fetchData.filter((posts) => {
        return posts.day_posted === "thu";
      });
      setPosts(filteredPosts);
      setSinglePost(filteredPosts);
    }
    if (day === "fri") {
      const filteredPosts = fetchData.filter((posts) => {
        return posts.day_posted === "fri";
      });
      setPosts(filteredPosts);
      setSinglePost(filteredPosts);
    }
  }

  function handleTime(morning) {
    if (morning === true) {
      const filteredPosts = posts.filter((posts) => {
        return posts.morning === true;
      });
      setSinglePost(filteredPosts);
    }
    if (morning === false) {
      console.log("afternoon")
      const filteredPosts = posts.filter((posts) => {
        return posts.morning === false;
      });
      setSinglePost(filteredPosts);
    }
  }
  console.log(singlePost)

  return (
    <div className="App">
      <title>FIAR APP</title>
      <Header count={count} dispatch={dispatch} />

      <div className="sidebar-main">
        <Sidebar handleDay={handleDay} handleTime={handleTime}/>
       {singlePost == null ?  <p>Couldn't find any posts</p> : <MainSection posts={singlePost}/>}
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
