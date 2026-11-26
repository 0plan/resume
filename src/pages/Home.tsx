import Skills from "@/components/Skills.tsx";
import AboutMe from "@/components/AboutMe.tsx";
import Information from "@/components/Information.tsx";
import { usePageMeta } from "@/lib/page-meta";
import { useTranslation } from "react-i18next";

export default function Home({
  interactive = true,
}: {
  interactive?: boolean;
}) {
  const { t } = useTranslation();
  usePageMeta(
    `${t("profile.name")} | ${t("profile.position")}`,
    t("profile.description"),
  );

  return (
    <div className="resume-layout grid grid-cols-1 items-start gap-x-12 gap-y-10 lg:grid-cols-[18rem_1fr] lg:grid-rows-[auto_1fr]">
      <AboutMe interactive={interactive} />
      <div className="min-w-0 space-y-10 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Information documents={t("experiences", { returnObjects: true })} />
        <div>
          <Information documents={t("featured", { returnObjects: true })} />
          {interactive && (
            <a
              className="print:hidden inline-flex min-h-11 items-center text-sm text-primary underline"
              href="#/projects"
            >
              {t("ui.exploreProjects")}
            </a>
          )}
        </div>
        <Information documents={t("careers", { returnObjects: true })} />
        <Information documents={t("portfolio", { returnObjects: true })} />
        <div>
          <Information documents={t("labs", { returnObjects: true })} />
          {interactive && (
            <a
              className="print:hidden inline-flex min-h-11 items-center text-sm text-primary underline"
              href="#/lab"
            >
              {t("ui.exploreLab")}
            </a>
          )}
        </div>
      </div>
      <aside className="min-w-0 space-y-10 lg:col-start-1 lg:row-start-2">
        <Skills />
        <Information documents={t("education", { returnObjects: true })} />
        <Information documents={t("certificates", { returnObjects: true })} />
      </aside>
    </div>
  );
}
