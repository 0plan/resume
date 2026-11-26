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
      {/* DOM 순서 = 모바일 순서. lg 부터는 프로필·보조 정보가 왼쪽 열, 경력이 오른쪽 열 */}
      <div className="grid grid-cols-1 items-start gap-x-12 gap-y-10 lg:grid-cols-[18rem_1fr] lg:grid-rows-[auto_1fr]">
        <AboutMe />
        <div className="space-y-10 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Information documents={t("experiences", { returnObjects: true })} />
          <Information documents={t("careers", { returnObjects: true })} />
          <Information documents={t("portfolio", { returnObjects: true })} />
        </div>
        <aside className="space-y-10 lg:col-start-1 lg:row-start-2">
          <Skills />
          <Information documents={t("education", { returnObjects: true })} />
          <Information
            documents={t("certificates", { returnObjects: true })}
          />
        </aside>
      </div>
    </div>
  );
}
