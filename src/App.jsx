import React from "react";
import { ThemeContext } from "./ThemeContext";
import "./app.css"

export default function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div className={`app__container ${theme}`}>
      <h1>Change the background by clicking the button!</h1>
      <p>Active Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
