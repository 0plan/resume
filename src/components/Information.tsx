import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/ui/card.tsx'

interface InformationProps {
  documents: {
    position?: string
    name: string
    date: {
      from: string
      to: string
    }
    desc?: string[]
    image?: string
  }[]
  title: string
}

const Information = ({ documents, title }: InformationProps) => {
  return (
    <Card className="my-3 w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {documents.map((item) => (
            <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="font-mono font-medium leading-none">
                  {item?.position}
                </p>
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.date.from} - {item.date.to}
                </p>
                <ul>
                  {item.desc?.map((description, descriptionIndex) => (
                    <li key={descriptionIndex}>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Information
