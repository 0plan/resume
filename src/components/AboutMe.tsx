import { useTranslation } from "react-i18next";
import avatar from "@/assets/img/brand.svg";
import { Github, Home, Mail } from "lucide-react";

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="space-y-4">
      <img
        className="h-24 w-24 rounded-lg object-cover"
        src={avatar}
        alt={t("profile.name")}
      />
      <div className="space-y-1">
        <h1 className="text-2xl font-bold leading-tight">{t("profile.name")}</h1>
        <p className="text-sm text-muted-foreground">{t("profile.position")}</p>
      </div>
      <p className="text-sm text-muted-foreground">{t("profile.description")}</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button type="button" onClick={() => window.print()} className="print:hidden rounded-md border px-3 py-1.5 text-sm font-medium">{i18n.language.startsWith("ko") ? "PDF 저장 / 인쇄" : "Save PDF / Print"}</button>
        <a target="_blank" rel="noreferrer" href={t("profile.blog")} className="flex items-center text-sm hover:underline">
          <Home className="mr-1 h-4 w-4" />
          Blog
        </a>
        <a target="_blank" rel="noreferrer" href={t("profile.github")} className="flex items-center text-sm hover:underline">
          <Github className="mr-1 h-4 w-4" />
          GitHub
        </a>
        <a target="_blank" rel="noreferrer" href={`mailto:${t("profile.email")}`} className="flex items-center text-sm hover:underline">
          <Mail className="mr-1 h-4 w-4" />
          Email
        </a>
      </div>
    </section>
  );
};
export default AboutMe;
