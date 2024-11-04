import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //+
  const increaseClick = () => {
    setCount(count + 1);
  };
  //-
  const decreaseClick = () => {
    setCount(count - 1);
  };
  //reset
  const resetClick = () => {
    setCount(0);
  };

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increaseClick}>+</button>
      <button onClick={decreaseClick}>-</button>
      <button onClick={resetClick}>reset</button>
    </section>
  );
}

export default Counter;
