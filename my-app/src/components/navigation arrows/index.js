import "./index.css";

export function NavigationArrows({ dispatch }) {
  return (
    <div>
      <button
        className="navButton"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Previous
      </button>
      <button
        className="navButton"
        onClick={() => dispatch({ type: "increment" })}
      >
        Next
      </button>
    </div>
  );
}
