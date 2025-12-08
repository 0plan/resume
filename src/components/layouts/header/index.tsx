import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLanguage from "@/stores/language.ts";
import { Globe } from "lucide-react";
import ToggleDarkMode from "@/components/ToggleDarkMode.tsx";

const Header = () => {
  const { t } = useTranslation();
  const { toggleLang } = useLanguage();

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-2 px-4 border-b z-50 backdrop-blur-sm">
      <nav
        className="mx-auto flex w-full max-w-340 items-center justify-between px-4"
        aria-label="Global"
      >
        <Link to="/resume" className="text-xl font-semibold">
          {t("project.title")}
        </Link>
        <div className="flex items-center justify-end sm:px-10">
          <ToggleDarkMode />
          <Globe className="cursor-pointer ml-2" onClick={toggleLang} aria-label="Toggle language" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
