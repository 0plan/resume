import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "@/lib/dark-mode.ts";
import useLanguage from "@/stores/language.ts";
import { Globe, Moon, Sun } from "lucide-react";

const Header = () => {
  const { t } = useTranslation();
  const { toggle } = useDarkMode();
  const { toggleLang } = useLanguage();

  return (
    <header className="z-50 flex w-full flex-wrap justify-start py-4 text-sm ">
      <nav
        className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-4"
        aria-label="Global"
      >
        <Link to="/resume" className="text-xl font-semibold">
          {t("project.title")}
        </Link>
        <div className="flex items-center justify-end sm:px-10">
          <Sun
            className="cursor-pointer ml-2 hidden dark:block"
            onClick={toggle}
          />
          <Moon className="cursor-pointer ml-2 dark:hidden" onClick={toggle} />
          <Globe className="cursor-pointer ml-2" onClick={toggleLang} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
