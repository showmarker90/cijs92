import { Button } from "antd";
import React, { useState } from "react";
import useCount from "../hooks/useCount";

const Body = () => {
  const { count, increase } = useCount();
  return (
    <div>
      <Button onClick={increase}>Button Body {count}</Button>
    </div>
  );
};

export default Body;
