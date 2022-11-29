//import { useState, useEffect } from "react";
import "./index.css";
//import MorningAfternoonButton from "../morning and afternoon buttons";
import CommentSection from "../comment section";
import PostsSection from "../post section";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function MainSection({ posts }) {
  const [commentsArr, setCommmentsArr] = useState([]);
  function handleSubmit(userInput, enterUserName) {
    const newComment = {
      username: enterUserName,
      comment_id: uuidv4(),
      contents: userInput,
    };
    setCommmentsArr([...commentsArr, newComment]);
    console.log("this is the comments array", commentsArr);
    console.log(newComment);
  }

  console.log("post id", posts[0].post_id);
  useEffect(() => {
    async function callURL() {
      if (posts[0].post_id === undefined) {
        setCommmentsArr(['Couldnt find a post'])
      }
      const response = await fetch(
        `http://localhost:3050/api/comments/${posts[0].post_id}`
      );
      const data = await response.json();
      setCommmentsArr([...data.payload]);
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
