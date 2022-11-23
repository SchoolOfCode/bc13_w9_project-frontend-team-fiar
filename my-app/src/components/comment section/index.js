import { useState } from "react";

function CommentSection(props) {
const[userInput, setUserInput] = useState("")
 function handleChange(e){
setUserInput(e.target.value)
console.log(userInput)
 }


    return (
      <div>
        <input type="text" onChange={handleChange}>
        </input>
          <button onClick={props.handleSubmit}> Submit</button>
      </div>
    );
  }
  
  export default CommentSection;