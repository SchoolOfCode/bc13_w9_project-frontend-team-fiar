//import { useState, useEffect } from "react";
import "./index.css";
//import MorningAfternoonButton from "../morning and afternoon buttons";
import CommentSection from "../comment section";
import PostsSection from "../post section";

function MainSection({ posts }) {
  function handleSubmit() {}
  return (
    <div className="main-section">
      <PostsSection posts={posts} />
      <CommentSection handleSubmit={handleSubmit} />
    </div>
  );
}

export default MainSection;
