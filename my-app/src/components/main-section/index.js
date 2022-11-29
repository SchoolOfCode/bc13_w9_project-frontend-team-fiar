import "./index.css";
import CommentInput from "../comment section";
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

  useEffect(() => {
    let postID = posts[0].post_id
    async function callURL() {
      if (posts[0].post_id === undefined) {
        setCommmentsArr(["Couldnt find a post"]);
      }
      const response = await fetch(
        `http://localhost:3050/api/comments/${postID}`
      );
      const data = await response.json();
      setCommmentsArr([...data.payload]);
    }
    callURL();
  }, [posts]);

  return (
    <div className="main-section">
      <PostsSection posts={posts} commentsArr={commentsArr} />
      <CommentInput handleSubmit={handleSubmit} />
    </div>
  );
}

export default MainSection;
