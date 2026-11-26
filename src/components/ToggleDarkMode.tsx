import { useDarkMode } from "@/lib/dark-mode.ts";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

const ToggleDarkMode = () => {
  const { toggle, isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={t(isDarkMode ? "ui.light" : "ui.dark")}
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
