import React from "react";

// 1 > 3
// <h1>1 > 3</h1>
// <h2>1 <3</h2>

const renderWithCondition = () => {
  if (1 > 3) {
    return <h1>1 lon hon 3</h1>;
  } else {
    return <h2> 1 nho hon 3</h2>;
  }
};

const ConditionalRendering = () => {
  return (
    <div>
      {
        //1 > 3 ? <h1>1 lon hon 3</h1> : <h2> 1 nho hon 3</h2>
      }
      {3 > 1 && <h1>3 lon hon 1</h1>}
    </div>
  );
};

export default ConditionalRendering;
