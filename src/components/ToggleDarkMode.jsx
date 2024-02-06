import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

function ToggleDarkMode() {
  const [isDark, setIsDark] = useState(true);
  function toggleDarkMode() {
    setIsDark((prev) => !prev);
    const htmlElement = document.querySelector("html");
    htmlElement.classList.toggle("dark");
  }

  return (
    <div className="flex items-center gap-3">
      <button
        className="p-5 border border-black dark:border-white rounded-md text-black dark:text-white"
        onClick={toggleDarkMode}
      >
        {isDark ? <FaMoon /> : <FaSun />}
      </button>
      <h1 className="font-black text-black dark:text-white">
        {isDark ? "Dark" : "White"} Mode
      </h1>
    </div>
  );
}

export default ToggleDarkMode;
