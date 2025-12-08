import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

interface TimelineProps {
  documents: {
    title: string;
    contents: {
      name: string;
      position?: string;
      tools?: string;
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
    '<a href="$&" target="_blank" class="text-primary">$&</a>',
  );
}

const Timeline = ({ documents }: TimelineProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-bold">
          <Briefcase className="w-4 h-4 mr-2" />
          {documents.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
          {documents.contents?.map((item, index) => (
            <div className="relative mb-8" key={item.name}>
              <div className="absolute -left-1.5 top-1 w-4 h-4 rounded-full bg-primary"></div>
              <div className="pl-6">
                <p className="text-base font-semibold leading-none">{item.name}</p>
                <p className="text-sm font-bold">{item?.position}</p>
                <p className="text-sm font-semibold">{item?.tools}</p>
                <p className="text-sm text-muted-foreground">
                  {item.date.from} {item.date.to ? "- " + item.date.to : ""}
                </p>
                <ul className="mt-2 list-disc pl-4 space-y-1">
                  {item.descriptions?.map((description, descriptionIndex) => (
                    <li
                      key={descriptionIndex}
                      className="text-sm text-muted-foreground"
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

export default Timeline;
