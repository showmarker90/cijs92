import { useState } from "react";

const useCount = (defaultValue = 0) => {
  const [count, setCount] = useState(defaultValue);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const multiply = (value) => {};
  const divide = (value) => {};

  const reset = () => {
    setCount(defaultValue);
  };

  return { count, increase, decrease, reset };
};

export default useCount;

//# Array
//# Object
