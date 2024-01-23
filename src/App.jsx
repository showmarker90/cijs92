import React, { useState } from "react";

const App = () => {
  const [person, setPerson] = useState({
    name: "mindX",
    age: 23,
  });

  [];

  const onChangeName = () => {
    const name = prompt("Enter name ?");
    setPerson({ ...person, name });
  };
  return (
    <div>
      <button>Add person</button>
    </div>
  );
};

export default App;

//button -> 2 prompt "name","age"
//k nhập tên -> tên
// k nhập tuổi -> cả tên cả tuổi
//{name,age,createdAt}
//[]
