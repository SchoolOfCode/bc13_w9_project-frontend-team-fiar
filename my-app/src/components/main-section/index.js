//import { useState, useEffect } from "react";
import "./index.css";
//import MorningAfternoonButton from "../morning and afternoon buttons";
import CommentSection from "../comment section";
import PostsSection from "../post section";
import { useEffect, useState } from "react";

function MainSection({ posts }) {
  const [commentsArr, setCommmentsArr] = useState([]);
  function handleSubmit() {}

  console.log("post id", posts[0].post_id);
  useEffect(() => {
    async function callURL() {
      const response = await fetch(
        `http://localhost:3050/api/comments/${posts[0].post_id}`
      );
      const data = await response.json();
      setCommmentsArr([...data.payload]);
      console.log("data",data.payload)
    }
    callURL();
  }, [posts[0].post_id]);

  return (
    <div className="main-section">
      <PostsSection posts={posts} commentsArr={commentsArr} />
      <CommentSection handleSubmit={handleSubmit} />
    </div>
  );
}

export default MainSection;
