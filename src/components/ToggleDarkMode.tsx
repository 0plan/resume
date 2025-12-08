import { useDarkMode } from "@/lib/dark-mode.ts";
import { Sun, Moon } from "lucide-react";

const ToggleDarkMode = () => {
  const { toggle, isDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggle}
      aria-label={isDarkMode ? "Toggle light mode" : "Toggle dark mode"}
      className="flex items-center justify-center p-2 rounded-full bg-secondary dark:bg-secondary hover:bg-muted dark:hover:bg-muted transition-colors duration-300"
    >
      {isDarkMode ? (
        <Sun className="text-primary" />
      ) : (
        <Moon className="text-foreground" />
      )}
    </button>
  );
};

export default ToggleDarkMode;
