import React, { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const prevTheme = localStorage.getItem("13x54r_theme");
    if (prevTheme) {
      setTheme(prevTheme);
    }
  }, []);

  function toggleTheme() {
    const _theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("13x54r_theme", _theme);
    setTheme(_theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
