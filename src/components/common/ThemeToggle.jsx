import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="bg-white/20 text-white px-3 py-1 rounded-xl font-bold hover:bg-white/30 hover:cursor-pointer"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}

export default ThemeToggle;
