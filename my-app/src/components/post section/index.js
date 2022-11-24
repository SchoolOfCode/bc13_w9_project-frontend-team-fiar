//import { useState, useEffect } from "react";

function PostsSection({posts}) {
  console.log('post section')
  console.log(posts)
  return (
    <div className='post-section'>
      <div className="Posts">
        <p>{posts[0].username}: {posts[0].contents}</p>
      </div>

      <div className="Comments">
        <p>comments are here</p>
      </div>
    </div>
  );
}

export default PostsSection;
