import React from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    fullname: "",
    password: "",
    email: "",
    confirmPassowrd: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !user.email ||
      !user.confirmPassowrd ||
      !user.fullname ||
      !user.password
    ) {
      alert("please check!!");
      return;
    }

    if (user.password !== user.confirmPassowrd) {
      alert("please check again password");
      return;
    }

    alert(JSON.stringify(user));
  };

  const onChangeValue = (key) => (e) =>
    setUser({ ...user, [key]: e.target.value });

  return (
    <form id="form" onSubmit={onSubmit}>
      <h1>Login form</h1>
      <label>Fullname</label>
      <input
        id="input"
        value={user.fullname}
        onChange={onChangeValue("fullname")}
      />
      <label>Password</label>
      <input
        id="input"
        value={user.password}
        onChange={onChangeValue("password")}
      />
      <label>Email</label>
      <input
        id="input"
        type="email"
        value={user.email}
        onChange={onChangeValue("email")}
      />
      <label>Confirm password</label>
      <input
        id="input"
        value={user.confirmPassowrd}
        onChange={onChangeValue("confirmPassowrd")}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default App;
