import { useState } from "react";

function CommentSection({handleSubmit}) {
const[userInput, setUserInput] = useState("")
 function handleChange(e){
setUserInput(e.target.value)
console.log(userInput)
 }


    return (
      <div>
        <input type="text" onChange={handleChange}>
        </input>
          <button onClick={()=>handleSubmit(userInput)}> Submit</button>
      </div>
    );
  }
  
  export default CommentSection;