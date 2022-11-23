//import { useState, useEffect } from "react";
import "./index.css";
//import MorningAfternoonButton from "../morning and afternoon buttons";
import CommentSection from "../comment section";
import PostsSection from "../post section";

function MainSection({ posts, comments }) {
  return (
    <div className='main-section'>
      <PostsSection posts={posts} comments={comments}/>
      <CommentSection/>
    </div>
  );
}

export default MainSection;
