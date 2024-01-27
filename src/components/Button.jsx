import React from "react";

const user = {
  username: "elon",
  pwd: 123,
};

const Button = ({ text = "My Button", getData }) => {
  return <button onClick={() => getData(user)}>{text}</button>;
};

export default Button;
