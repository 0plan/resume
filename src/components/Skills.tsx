import { Progress } from "@/components/ui/progress.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { useTranslation } from "react-i18next";

interface IContent {
  title: string;
  items: {
    title: string;
    level: number;
  }[];
}

const SkillCategory = ({ title, items }: IContent) => (
  <div className="p-4 border rounded-lg">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="space-y-4">
      {items.map((skill) => (
        <div key={skill.title}>
          <p className="text-sm font-medium leading-none mb-2">{skill.title}</p>
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
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{t("skill.title")}</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillContents.map((content) => (
          <SkillCategory key={content.title} {...content} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;
