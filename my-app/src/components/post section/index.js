//import { useState, useEffect } from "react";
import Comments from "../comments";

function PostsSection({ posts, commentsArr }) {
  return (
    <div className="post-section">
      <div className="Posts">
        <p>
          {posts[0]?.username}, {posts[0]?.contents}
        </p>
      </div>

      <div className="Comments">
        {commentsArr.map((item) => {
          return <Comments comment={item} />;
        })}
      </div>
    </div>
  );
}

export default PostsSection;
