import { useState, useEffect } from "react";
import "./index.css";

function MainSection() {
  return (
    <div>
      <MorningAfternoonButton />
      <CommentsSection />
      <PostsSection />
    </div>
  );
}

export default MainSection;
