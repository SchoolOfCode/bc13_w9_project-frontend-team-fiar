import "./index.css";
import { NavigationArrows } from "../navigation arrows";


function Header({count, dispatch}) {

  return (
    <div>
      <h1>Week {count}</h1>
      <NavigationArrows dispatch={dispatch}/>
    </div>
  );
}

export default Header;
