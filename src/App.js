import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [totalDogs, setTotalDogs] = useState(1);

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    //setTimeout for 3 seconds
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  };

  const doSomething = () => {
    //setTimeout for 3 seconds
    setTimeout(() => {
      setTotalDogs(totalDogs + 1);
    }, 3000);
  };

  return (
    <div className="App">
      <h1>Virtual DOM Demo!</h1>
      <p>Right now we have 1 dog.</p>
      <p>Guess how many more my girlfriend thinks we need?</p>
      <p>{count}</p>
      <button onClick={decrease}> - </button>
      <button onClick={increase}> + </button>
      <p>...add dogs?</p>
      <button onClick={doSomething}>Definitely</button>

      <p>Now we have {totalDogs} dogs!</p>
    </div>
  );
}

export default App;
