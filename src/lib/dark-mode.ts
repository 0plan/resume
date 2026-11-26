import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return (
      savedMode === "true" ||
      (savedMode !== "false" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggle = () => setIsDarkMode((dark) => !dark);

  return { isDarkMode, toggle };
};
