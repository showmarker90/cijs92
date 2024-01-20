import React, { useState } from "react";

const App = () => {
  const [tinder, setTinder] = useState([]);
  const onAddTinder = () => {
    const name = prompt("Enter name you want to date?");

    setTinder([...tinder, name]);
  };
  return (
    <div>
      <h1>{JSON.stringify(tinder)}</h1>
      <button onClick={onAddTinder}>Add tinder</button>
    </div>
  );
};

export default App;
