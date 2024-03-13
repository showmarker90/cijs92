import React, { useState } from "react";

const ComponentA = ({ value, setValue }) => {
  return (
    <div>
      ComponentA
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default ComponentA;
