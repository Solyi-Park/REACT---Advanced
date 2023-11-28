import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  const countUp = function () {
    const addOne = count +1;
    setCount(addOne);
    console.log(addOne);
  };
  const countDown = function () {
    const minusOne = count -1;
    setCount(minusOne);
    console.log(minusOne);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20%",
      }}
    >
      <p>{count}</p>
      <div>
        <button onClick={countUp}>+ 1</button>
        <button onClick={countDown}>- 1</button>
      </div>
    </div>
  );
}

export default App;
