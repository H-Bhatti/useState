import React, { useState } from "react";
import "./App.css";

const App = () => {
  const state = useState();
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <div className="container">
        <button className="button" onClick={() => setCount(count * 91)}>
          click me
        </button>
      </div>
    </>
  );
};
export default App;
