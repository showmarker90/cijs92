import { Button, Input } from "antd";
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import useInput from "./hooks/useInput";

const App = () => {
  const { value, onChange, reset } = useInput();
  return (
    <div>
      <h1>{value}</h1>
      <Input
        value={value}
        onChange={onChange}
        suffix={
          <Button type="primary" danger size="small" onClick={reset}>
            Reset
          </Button>
        }
      />
    </div>
  );
};

export default App;
