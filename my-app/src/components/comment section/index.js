import { useState } from "react";

function CommentSection({ handleSubmit }) {
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value);
    console.log(userInput);
  }

  function handleClick() {
    handleSubmit(userInput);
    setUserInput(" ");
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={userInput}></input>
      <button onClick={handleClick}> Submit</button>
    </div>
  );
}

export default CommentSection;
