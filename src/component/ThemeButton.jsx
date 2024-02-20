import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";

const ThemeButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <li onClick={toggleTheme}>
      {theme === "light" ? (
        <FaMoon fontSize={20} />
      ) : (
        <IoSunny fontSize={20} color="white" />
      )}
    </li>
  );
};

export default ThemeButton;
