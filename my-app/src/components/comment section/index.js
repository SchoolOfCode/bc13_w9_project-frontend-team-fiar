import { useState } from "react";

function CommentInput({ handleSubmit }) {
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
    <div className="inputs">
      <input
        maxLength="10"
        type="text"
        placeholder="Username here"
        onChange={handleUserNameChange}
      ></input>
      <input
        maxLength="200"
        className="commentplease"
        type="textarea"
        placeholder="comment here"
        onChange={handleChange}
        value={userInput}
      ></input>
      <button className="submitButton" onClick={handleClick}>
        {" "}
        Submit
      </button>
    </div>
  );
}

export default CommentInput;
