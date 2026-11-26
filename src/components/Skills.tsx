import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const groups = t("skill.contents", { returnObjects: true });

  return (
    <section>
      <h2 className="border-b border-primary/40 pb-2 text-lg font-bold">
        {t("skill.title")}
      </h2>
      <div className="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-1">
        {groups.map(({ title, items }) => (
          <div key={title}>
            <h3 className="mb-3 text-sm font-semibold">{title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill.title}
                  className="rounded-md border bg-muted px-2 py-1 text-xs"
                >
                  {skill.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
