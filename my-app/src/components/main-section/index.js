//import { useState, useEffect } from "react";
import "./index.css";
//import MorningAfternoonButton from "../morning and afternoon buttons";
//import CommentsSection from "../comment section";
//import PostsSection from "../post section"
import CommentSection from "../comment section";
import PostsSection from "../post section";

function MainSection() {
  return (
    <div>
      <PostsSection />
      <CommentSection />
    </div>
  );
}
//   <CommentsSection />
//<PostsSection />
//<MorningAfternoonButton />

export default MainSection;
