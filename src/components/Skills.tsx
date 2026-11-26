import { useTranslation } from "react-i18next";

interface IContent {
  title: string;
  items: {
    title: string;
  }[];
}

const SkillCategory = ({ title, items }: IContent) => (
  <div>
    <h3 className="mb-3 text-sm font-semibold">{title}</h3>
    <div className="flex flex-wrap gap-1.5">
      {items.map((skill) => (
        <span key={skill.title} className="rounded-md border bg-muted px-2 py-1 text-xs">{skill.title}</span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();
  const skillContents = t("skill.contents", { returnObjects: true }) as unknown as IContent[];

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
