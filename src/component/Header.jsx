import React, { useContext } from "react";
import { FaReact } from "react-icons/fa";
import { ThemeContext } from "../App";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <div id="header">
      <div className="header-left">
        <FaReact fontSize={40} color="#149eca" />
      </div>
      <div className="header-right">
        <ul>
          <li className="text">Learn</li>
          <li className="text">Reference</li>
          <li className="text">About</li>

          <ThemeButton />
        </ul>
      </div>
    </div>
  );
};

export default Header;
