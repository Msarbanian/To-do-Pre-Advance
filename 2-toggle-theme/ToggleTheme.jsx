import { useState } from "react";
import "./app.css";
// const body = document.querySelector("body");

function ToggleTheme() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };
  // body.className = isDarkTheme ? "dark-theme app" : "light-theme app";
  return (
    <section className={isDarkTheme ? "dark-theme app" : "light-theme app"}>
      <p>{isDarkTheme ? "Dark" : "Light"}</p>
      <button className="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </section>
  );
}
export default ToggleTheme;
