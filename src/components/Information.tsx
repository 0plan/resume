import type { ResumeSection } from "@/lib/resume";

function CreateLink({ description }: { description: string }) {
  return (
    <>
      {description.split(/(https?:\/\/[^\s[\]<>"']+)/g).map((part, index) =>
        /^https?:\/\//.test(part) ? (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all underline underline-offset-2 text-primary"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

// 넓은 영역에서는 날짜 열 | 내용 열 2단, 좁은 영역(사이드바·모바일)에서는 날짜가 제목 위로 온다.
const Information = ({ documents }: { documents: ResumeSection }) => {
  return (
    <section className="@container">
      <h2 className="border-b border-primary/40 pb-2 text-lg font-bold">
        {documents.title}
      </h2>
      <div className="divide-y">
        {documents.contents.map((item) => (
          <article
            className="grid gap-x-6 gap-y-1 py-4 @2xl:grid-cols-[13rem_1fr]"
            key={item.name}
          >
            <p className="whitespace-nowrap text-xs leading-6 tabular-nums text-muted-foreground">
              {item.date.from} {item.date.to ? "– " + item.date.to : ""}
            </p>
            <div className="min-w-0 space-y-1.5">
              <h3 className="text-base font-semibold leading-6">{item.name}</h3>
              {item.position && (
                <p className="text-sm text-muted-foreground">{item.position}</p>
              )}
              {item.tools && (
                <div className="flex flex-wrap gap-1">
                  {item.tools.split(",").map((tool) => (
                    <span
                      key={tool}
                      className="rounded-sm border bg-muted px-1.5 py-0.5 text-xs text-foreground"
                    >
                      {tool.trim()}
                    </span>
                  ))}
                </div>
              )}
              {item.descriptions && (
                <ul className="list-disc space-y-0.5 pl-4 marker:text-muted-foreground">
                  {item.descriptions.map((description, descriptionIndex) => (
                    <li
                      key={descriptionIndex}
                      className="text-sm text-muted-foreground"
                    >
                      <CreateLink description={description} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Information;
