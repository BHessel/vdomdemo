import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  const doSomething = () => {
    const label = document.getElementById("label");
    if (label.innerHTML === 'Definitely') {
      label.innerHTML = "She's Happy"
    } else {
      label.innerHTML = "Definitely"
    }
  }

  return (
    <div className="App">
      <h1>Virtual DOM Demo!</h1>
      <p>Right now we have 1 dog.</p>
      <p>Guess how many more my girlfriend thinks we need?</p>
      <p>{count}</p>
      <button onClick={decrease}> - </button>
      <button onClick={increase}> + </button>
      <p>...add dogs?</p>
      <button id='label' onClick={doSomething}>Definitely</button>
    </div>
  );
}

export default App;
