import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

interface InformationProps {
  documents: {
    title: string;
    contents: {
      name: string;
      position?: string;
      date: {
        from: string;
        to?: string;
      };
      descriptions?: string[];
      image?: string;
    }[];
  };
}

function CreateLink({ description }: { description: string }) {
  return description.replace(
    /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,6}(\?[/a-z0-9-%#?&=\w]+)*)*/gi,
    '<a href="$&" target="_blank" class="text-sky-500">$&</a>',
  );
}

const Information = ({ documents }: InformationProps) => {
  return (
    <Card className="my-3 w-full">
      <CardHeader>
        <CardTitle>{documents.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {documents.contents?.map((item) => (
            <div
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              key={item.name}
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="font-medium leading-none">{item.name}</p>
                <p className="text-sm font-bold">{item?.position}</p>
                <p className="text-sm text-muted-foreground">
                  {item.date.from} {item.date.to ? "- " + item.date.to : ""}
                </p>
                <ul>
                  {item.descriptions?.map((description, descriptionIndex) => (
                    <li
                      key={descriptionIndex}
                      dangerouslySetInnerHTML={{
                        __html: CreateLink({ description }),
                      }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Information;
