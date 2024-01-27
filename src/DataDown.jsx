import React from "react";
import Button from "./components/Button";

const DataDown = () => {
  const getData = (user) => {
    console.log(user);
  };
  return (
    <div>
      <Button text="Click me" getData={getData} />
    </div>
  );
};

export default DataDown;
