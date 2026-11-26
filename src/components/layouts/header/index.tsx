import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLanguage from "@/stores/language.ts";
import { Globe } from "lucide-react";
import ToggleDarkMode from "@/components/ToggleDarkMode.tsx";

const Header = () => {
  const { t } = useTranslation();
  const { toggleLang } = useLanguage();

  return (
    <header className="sticky top-0 flex h-14 items-center justify-between gap-2 px-4 border-b z-50 backdrop-blur-sm">
      <nav
        className="mx-auto flex w-full max-w-340 items-center justify-between px-4"
        aria-label="Global"
      >
        <Link to="/resume" className="text-base font-semibold">
          {t("project.title")}
        </Link>
        <div className="flex items-center justify-end gap-1">
          <ToggleDarkMode />
          <button onClick={toggleLang} aria-label="Toggle language" className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <Globe className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
