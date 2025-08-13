import { useTranslation } from "react-i18next";
import avatar from "@/assets/img/avatar.jfif";
import { Github, Home, Mail } from "lucide-react";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded shadow-sm mt-3">
      <figure className="rounded-xl bg-slate-100 p-4 md:flex md:p-0 dark:bg-slate-800">
        <img
          className="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-xl"
          src={avatar}
          alt={t("profile.name")}
          width="384"
          height="512"
        />
        <div className="text-center md:text-left md:mx-4 flex flex-wrap items-center justify-center">
          <figcaption className="font-medium">
            <blockquote>
              <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                {t("profile.description")}
              </p>
            </blockquote>
            <div className="text-sky-500 dark:text-sky-400">
              {t("profile.name")}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {t("profile.position")}
            </div>
            <div className="text-slate-800 dark:text-slate-300 flex items-center underline">
              <Home className="w-4 h-4 mr-2" />
              <a target="_blank" href={t("profile.blog")}>
                {t("profile.blog")}
              </a>
            </div>
            <div className="text-slate-800 dark:text-slate-300 flex items-center underline flex-1">
              <Github className="w-4 h-4 mr-2" />
              <a target="_blank" href={t("profile.github")}>
                {t("profile.github")}
              </a>
            </div>
            <div className="text-slate-800 dark:text-slate-300 flex items-center underline flex-1">
              <Mail className="w-4 h-4 mr-2" />
              <a target="_blank" href={`mailto:${t("profile.email")}`}>
                {t("profile.email")}
              </a>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};
export default AboutMe;
