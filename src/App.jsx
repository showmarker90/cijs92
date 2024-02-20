import React, { createContext, useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import "./App.css";

export const ThemeContext = createContext();

const themeFromLocal = localStorage.getItem("theme");

const App = () => {
  const [theme, setTheme] = useState(themeFromLocal ? themeFromLocal : "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className={`app ${theme}`}>
        <Header />
        <Body />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
