import React, { useState } from "react";

const A = ({ value, setValue }) => {
  return (
    <div>
      A
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default A;
