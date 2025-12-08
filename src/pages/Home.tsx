import Timeline from "@/components/Timeline.tsx";
import Skills from "@/components/Skills.tsx";
import AboutMe from "@/components/AboutMe.tsx";
import Information from "@/components/Information.tsx";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <article>
        <title>Fullstack Developer | 0plan</title>
        <meta name="description" content="Fullstack Developer Resume - 0plan" />
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <AboutMe />
          <Information documents={t("education", { returnObjects: true })} />
        </div>
        <div className="space-y-4">
          <Timeline documents={t("experiences", { returnObjects: true })} />
          <Information
            documents={t("certificates", { returnObjects: true })}
          />
        </div>
        <div className="md:col-span-2">
          <Skills />
        </div>
        <div className="md:col-span-2">
          <Information documents={t("careers", { returnObjects: true })} />
        </div>
        <div className="md:col-span-2">
          <Information documents={t("portfolio", { returnObjects: true })} />
        </div>
      </div>
    </div>
  );
}
