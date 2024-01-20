import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onMultiple = (value) => {
    setCount(value * count);
  };

  const onDivide = (value) => {
    if (!value) {
      alert("value must be greater than zero");
      return;
    }
    setCount(count / value);
  };

  console.log("re-render");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>increase</button>
      <button onClick={onDecrease}>decrease</button>
      <button onClick={() => onMultiple(100)}>multiple</button>
      <button onClick={() => onDivide(100)}>divide</button>
    </div>
  );
};

export default Counter;
