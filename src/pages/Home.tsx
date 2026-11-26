import { Link } from "react-router-dom";
import Skills from "@/components/Skills.tsx";
import AboutMe from "@/components/AboutMe.tsx";
import Information, { type InformationProps } from "@/components/Information.tsx";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const document = (key: string) => t(key, { returnObjects: true }) as unknown as InformationProps["documents"];

  return (
    <div>
      <article>
        <title>Full Stack Engineer & DevOps | 0plan</title>
        <meta name="description" content="Full Stack Engineer & DevOps Resume - 0plan" />
      </article>
      {/* DOM 순서 = 모바일 순서. lg 부터는 프로필·보조 정보가 왼쪽 열, 경력이 오른쪽 열 */}
      <div className="grid grid-cols-1 items-start gap-x-12 gap-y-10 lg:grid-cols-[18rem_1fr] lg:grid-rows-[auto_1fr]">
        <AboutMe />
        <div className="min-w-0 space-y-10 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Information documents={document("experiences")} />
          <div><Information documents={document("featured")} /><Link className="print:hidden text-sm text-primary underline underline-offset-4" to="/projects">{i18n.language.startsWith("ko") ? "프로젝트 상세 보기" : "Explore projects"}</Link></div>
          <Information documents={document("careers")} />
          <Information documents={document("portfolio")} />
          <div><Information documents={document("labs")} /><Link className="print:hidden text-sm text-primary underline underline-offset-4" to="/lab">{i18n.language.startsWith("ko") ? "연구 상세 보기" : "Explore research"}</Link></div>
        </div>
        <aside className="min-w-0 space-y-10 lg:col-start-1 lg:row-start-2">
          <Skills />
          <Information documents={document("education")} />
          <Information
            documents={document("certificates")}
          />
        </aside>
      </div>
    </div>
  );
}
