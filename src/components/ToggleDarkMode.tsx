import { useDarkMode } from "@/lib/dark-mode.ts";
import { Sun, Moon } from "lucide-react";

const ToggleDarkMode = () => {
  const { toggle, isDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
    >
      {isDarkMode ? (
        <Sun className="text-yellow-500" />
      ) : (
        <Moon className="text-gray-500" />
      )}
    </button>
  );
};

export default ToggleDarkMode;
