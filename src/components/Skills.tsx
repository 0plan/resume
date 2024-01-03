import { Progress } from '@components/ui/progress.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card.tsx'
import { cn } from '~/lib/utils.ts'
import { Button } from '@components/ui/button.tsx'
import { Check } from 'lucide-react'

const skillContents = {
  frontend: [
    {
      name: 'Vue.js',
      percentage: 70,
    },
    {
      name: 'React.js',
      percentage: 70,
    },
  ],
  backend: [
    {
      name: 'Java Spring Boot',
      percentage: 80,
    },
    {
      name: 'Node.js Express Framework',
      percentage: 70,
    },
    {
      name: 'Python Django',
      percentage: 20,
    },
  ],
  language: [
    {
      name: 'Javascript ES5',
      percentage: 80,
    },
    {
      name: 'Javascript ES6',
      percentage: 80,
    },
    {
      name: 'Java',
      percentage: 70,
    },
    {
      name: 'Python',
      percentage: 50,
    },
  ],
}

const Skills = () => {
  const SkillProgress = ({ contents, title }) => {
    return (
      <Card className={cn('sm:my-3 sm:w-full md:mx-3 md:w-1/3')}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {contents.map((skill, index) => (
            <div
              key={index}
              className="mb-4 items-start pb-4 last:mb-0 last:pb-0"
            >
              <div className="space-y-5">
                <p className="text-sm font-medium leading-none">{skill.name}</p>
                <Progress value={skill.percentage} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      <p className="py-3 text-2xl">Skills</p>
      <div className="md:flex">
        <SkillProgress title={'Frontend'} contents={skillContents.frontend} />
        <SkillProgress title={'Backend'} contents={skillContents.backend} />
        <SkillProgress title={'Language'} contents={skillContents.language} />
      </div>
    </div>
  )
}

export default Skills
