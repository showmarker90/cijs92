import { Button } from "antd";
import React, { useState } from "react";
import useCount from "../hooks/useCount";

const Header = () => {
  const { count, increase, reset, decrease } = useCount();
  return (
    <div>
      <h1>{count} </h1>
      <Button onClick={increase}>Button Header </Button>
      <Button danger onClick={decrease}>
        Decrease Header
      </Button>
      <Button type="primary" onClick={reset}>
        Reset Header
      </Button>
    </div>
  );
};

export default Header;
