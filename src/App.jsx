import { Button } from "antd";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const clickCountState = () => setCount(count + 1);

  const logMsg = useCallback((msg = "Nothing") => {
    console.log(msg);
  }, []);

  useEffect(() => {
    console.log("effect running!");
  }, [logMsg]);

  return (
    <div>
      <h1>Count state :{count}</h1>
      <Button onClick={clickCountState}>Click me</Button>
    </div>
  );
};

export default App;
