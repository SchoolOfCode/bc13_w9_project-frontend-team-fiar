import React from "react";
import "./App.css";
//import { useState } from "react";
//import NavigationArrows from "../navigation arrows";
import Header from "../header";
import Sidebar from "../sidebar";
import MainSection from "../main-section";
// For navbar
// import all of the route handlers "week 1 to 16"
// within function app return the navbar and the routes nested within the header
//

function App() {
 //handleclick

  return (
    <main>
      <title>FIAR APP</title>
      <Header /*PreviousWeek={PreviousWeek} NextWeek={NextWeek}*/ />

      <Sidebar />

      <MainSection />
    </main>
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
