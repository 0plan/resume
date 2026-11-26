import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import ToggleDarkMode from "@/components/ToggleDarkMode.tsx";

const Header = () => {
  const { t, i18n } = useTranslation();
  const nextLanguage = i18n.resolvedLanguage === "ko" ? "en" : "ko";

  return (
    <header className="print:hidden sticky top-0 z-50 border-b bg-background">
      <a
        href="#content"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("content")?.focus();
        }}
      >
        {t("ui.skip")}
      </a>
      <nav
        className="mx-auto flex min-h-14 max-w-340 flex-wrap items-center justify-between gap-x-2 px-3 sm:px-6"
        aria-label={t("ui.navigation")}
      >
        <Link
          to="/"
          aria-label={`0plan · ${t("project.title")}`}
          className="inline-flex min-h-11 min-w-11 items-center font-semibold text-primary"
        >
          0plan
        </Link>
        <div className="nav-actions flex items-center text-sm">
          <NavLink to="/projects" title="Zero-Plan" className="gap-1">
            <img
              src={`${import.meta.env.BASE_URL}favicon.svg`}
              alt=""
              width="22"
              height="22"
            />
            {t("ui.projects")}
          </NavLink>
          <NavLink to="/lab">{t("ui.lab")}</NavLink>
          <a href={t("profile.blog")} target="_blank" rel="noreferrer">
            Blog
          </a>
          <ToggleDarkMode />
          <button
            type="button"
            onClick={() => void i18n.changeLanguage(nextLanguage)}
            aria-label={t("ui.language")}
            lang={nextLanguage}
          >
            <Globe size={18} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
