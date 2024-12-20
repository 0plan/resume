import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode ? JSON.parse(savedMode) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;
    isDarkMode ? bodyClass.add(className) : bodyClass.remove(className);
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggle = () => setIsDarkMode(!isDarkMode);

  return { isDarkMode, toggle };
};
