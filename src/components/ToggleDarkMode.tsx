import { useDarkMode } from "@/lib/dark-mode.ts";
import { Sun, Moon } from "lucide-react";

const ToggleDarkMode = () => {
  const { toggle, isDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggle}
      aria-label={isDarkMode ? "Toggle light mode" : "Toggle dark mode"}
      className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {isDarkMode ? (
        <Sun className="h-[18px] w-[18px]" strokeWidth={1.5} />
      ) : (
        <Moon className="h-[18px] w-[18px]" strokeWidth={1.5} />
      )}
    </button>
  );
};

export default ToggleDarkMode;
