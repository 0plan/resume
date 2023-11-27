import {useEffect, useState} from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
        localStorage.setItem('theme', darkMode ? 'light' : 'dark')
    }


    useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
        const modeMe = e => {
            setDarkMode(!!e.matches);
        }
        setDarkMode(matchMedia.matches);
        matchMedia.addEventListener("change", modeMe);

        return () => matchMedia.removeEventListener("change", modeMe);
    }, []);


    return (
        <nav className="bg-white justify-center dark:bg-slate-800 h-full">
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    onClick={handleDarkMode}
                    checked={localStorage.getItem("theme") == "dark"}
                />
                <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          다크 모드 {localStorage.getItem("theme") == "dark" ? "On" : "Off"}
        </span>
            </label>
            <h1 className="text-3xl font-bold underline dark:text-slate-400">
                테스트
            </h1>
            <p className="text-red-300 dark:text-slate-300">배경과 글의 색상이 변경됩니다.</p>
        </nav>
    )
}

export default Header;
