import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mx-auto w-full max-w-340 px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <nav
          className="mb-3 flex justify-center gap-4 text-sm underline [&>a]:inline-flex [&>a]:min-h-11 [&>a]:items-center"
          aria-label="Static resume"
        >
          <a lang="ko" href={`${import.meta.env.BASE_URL}static/ko.html`}>
            한국어 HTML
          </a>
          <a lang="en" href={`${import.meta.env.BASE_URL}static/en.html`}>
            English HTML
          </a>
        </nav>
        <span className="text-sm text-muted-foreground sm:text-center">
          {t("update.description")} {t("update.date")}
        </span>
        <a
          href={t("update.note")}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-11 justify-center items-center"
        >
          <div className="border rounded-full mr-2 border-foreground p-1">
            <Github className="h-4 w-4" />
          </div>
          <span className="underline text-primary hover:text-primary">
            {t("ui.history")}
          </span>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
