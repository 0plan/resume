import { Progress } from "@/components/ui/progress.tsx";
import { useTranslation } from "react-i18next";

interface IContent {
  title: string;
  items: {
    title: string;
    level: number;
  }[];
}

const SkillCategory = ({ title, items }: IContent) => (
  <div>
    <h3 className="mb-3 text-sm font-semibold">{title}</h3>
    <div className="space-y-3">
      {items.map((skill) => (
        <div key={skill.title}>
          <p className="mb-1.5 text-xs leading-none text-muted-foreground">{skill.title}</p>
          <Progress value={skill.level * 10} />
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();
  const skillContents: IContent[] = t("skill.contents", { returnObjects: true });

  return (
    <section>
      <h2 className="border-b border-foreground pb-2 text-lg font-bold">
        {t("skill.title")}
      </h2>
      <div className="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-1">
        {skillContents.map((content) => (
          <SkillCategory key={content.title} {...content} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
