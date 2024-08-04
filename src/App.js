import React, { useState } from "react";
import "./App.css";

const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const state = useState();
  const [currentTime, getCurrTime] = useState(newTime);

  return (
    <>
      <h1>Time</h1>
      <h1>{currentTime}</h1>
      <div className="container">
        <button
          onClick={() => {
            newTime = new Date().toLocaleTimeString();
            getCurrTime(newTime);
          }}
          className="button"
        >
          Get Time
        </button>
      </div>
    </>
  );
};
export default App;
