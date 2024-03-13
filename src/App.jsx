import React, { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <ComponentA value={value} setValue={setValue} />
      <ComponentB value={value} />
    </div>
  );
};

export default App;
