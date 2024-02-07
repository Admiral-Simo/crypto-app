import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

function ToggleDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  });

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (isDark) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        className="p-5 duration-500 transition-colors border border-black dark:border-white rounded-md text-black dark:text-white"
        onClick={toggleDarkMode}
      >
        {isDark ? <FaMoon /> : <FaSun />}
      </button>
      <h1 className="duration-500 font-black text-black transition-colors dark:text-white">
        {isDark ? "Dark" : "White"} Mode
      </h1>
    </div>
  );
}

export default ToggleDarkMode;
