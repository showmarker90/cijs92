import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-nav">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/laptop"}>Laptop</NavLink>
      <NavLink to={"/phone"}>Phone</NavLink>
      <NavLink to={"/tablet"}>Tablet</NavLink>
      <NavLink to={"/products"}>Product</NavLink>
    </div>
  );
};

export default Header;
