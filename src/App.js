import React, { useState } from "react";
import "./App.css";

const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const state = useState();
  const [currentTime, getCurrTime] = useState(newTime);
  // the first part of array is the current value and
  // the second part is the value that is the updated value which will be the value you can pass the new value to this part
  // and it will become the new current value
  // the argument with the useState(value) is the value that is the initial value which can be anything

  let automatic = () => {
    newTime = new Date().toLocaleTimeString();
    getCurrTime(newTime);
  };
  setInterval(automatic, 1000);

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
