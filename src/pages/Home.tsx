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
      <div className="md:flex">
        <div className="md:w-1/2 xl:w-1/2">
          <div className="w-full">
            <AboutMe />
          </div>
          <Information documents={t("education", { returnObjects: true })} />
        </div>
        <div className="md:w-1/2 xl:flex xl:w-full">
          <div className="md:pl-2 xl:w-full">
            <Information
              documents={t("experiences", { returnObjects: true })}
            />
          </div>

          <div className="md:pl-2 xl:w-full">
            <Information
              documents={t("certificates", { returnObjects: true })}
            />
          </div>
        </div>
      </div>
      <Skills />
      <Information documents={t("careers", { returnObjects: true })} />
      <Information documents={t("portfolio", { returnObjects: true })} />
    </div>
  );
}
