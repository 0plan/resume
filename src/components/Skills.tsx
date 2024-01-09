import { Progress } from '@components/ui/progress.tsx'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/ui/card.tsx'
import { cn } from '~/lib/utils.ts'
import { useTranslation } from 'react-i18next'

interface IContent {
  title: string
  items: [
    {
      title: string
      level: number
    },
  ]
}

interface SkillProps {
  contents: IContent[]
}
const SkillProgress = ({ contents }: SkillProps) => {
  return contents.map((content) => (
    <Card className={cn('my-3 md:w-full lg:mx-3 lg:w-1/3')} key={content.title}>
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {content.items.map((skill) => (
          <div
            key={skill.title}
            className="mb-4 items-start pb-4 last:mb-0 last:pb-0"
          >
            <div className="space-y-5">
              <p className="text-sm font-medium leading-none">{skill.title}</p>
              <Progress value={skill.level * 20} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  ))
}
const Skills = () => {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('skill.title')}</CardTitle>
      </CardHeader>
      <CardContent className="lg:flex">
        <SkillProgress
          contents={t('skill.contents', { returnObjects: true })}
        />
      </CardContent>
      <div className="lg:flex"></div>
    </Card>
  )
}

export default Skills
