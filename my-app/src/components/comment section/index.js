import { useState } from "react";

function CommentSection({ handleSubmit }) {
  const [userInput, setUserInput] = useState("");
  const [enterUserName, setEnterUserName] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value);
    console.log(userInput);
  }
  function handleUserNameChange(e) {
    setEnterUserName(e.target.value);
    console.log(enterUserName);
  }
  function handleClick() {
    handleSubmit(userInput, enterUserName);
    setUserInput(" ");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username here"
        onChange={handleUserNameChange}
      ></input>
      <input
        type="text"
        placeholder="comment here"
        onChange={handleChange}
        value={userInput}
      ></input>
      <button onClick={handleClick}> Submit</button>
    </div>
  );
}

export default CommentSection;
