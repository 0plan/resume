import { useTranslation } from "react-i18next";
import { Github, Home, Mail } from "lucide-react";

const AboutMe = ({ interactive }: { interactive: boolean }) => {
  const { t } = useTranslation();

  return (
    <section className="space-y-4">
      <p className="text-sm font-semibold text-primary" lang="en">
        0plan / The Curious Builder
      </p>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold leading-tight">
          {t("profile.name")}
        </h1>
        <p className="text-sm text-muted-foreground">{t("profile.position")}</p>
      </div>
      <p className="text-sm text-muted-foreground">
        {t("profile.description")}
      </p>
      <p className="font-mono text-sm" lang="en">
        Explore. Build. Simplify.
      </p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {interactive && (
          <button
            type="button"
            onClick={() => window.print()}
            className="print:hidden min-h-11 rounded-md border border-primary bg-primary px-3 text-sm font-medium text-primary-foreground"
          >
            {t("ui.print")}
          </button>
        )}
        <a
          target="_blank"
          rel="noreferrer"
          href={t("profile.blog")}
          className="flex min-h-11 items-center text-sm text-primary hover:underline"
        >
          <Home className="mr-1 h-4 w-4" />
          <span className="print:hidden">Blog</span>
          <span className="hidden print:inline">{t("profile.blog")}</span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={t("profile.github")}
          className="flex min-h-11 items-center text-sm text-primary hover:underline"
        >
          <Github className="mr-1 h-4 w-4" />
          <span className="print:hidden">GitHub</span>
          <span className="hidden print:inline">{t("profile.github")}</span>
        </a>
        <a
          href={`mailto:${t("profile.email")}`}
          className="flex min-h-11 items-center text-sm text-primary hover:underline"
        >
          <Mail className="mr-1 h-4 w-4" />
          <span className="print:hidden">Email</span>
          <span className="hidden print:inline">{t("profile.email")}</span>
        </a>
      </div>
    </section>
  );
};
export default AboutMe;
