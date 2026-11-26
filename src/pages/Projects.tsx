import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InfrastructureDiagram from "@/components/InfrastructureDiagram";
import { usePageMeta } from "@/lib/page-meta";

export default function Projects({ lab = false }: { lab?: boolean }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const section = t(lab ? "labs" : "featured", { returnObjects: true });
  const list = lab ? "/lab" : "/projects";
  const selected = section.contents.find((item) => item.id === id);
  const title = id ? (selected?.name ?? t("ui.missing")) : section.title;
  usePageMeta(title, selected?.descriptions[0] ?? section.title);

  if (
    id &&
    !selected &&
    !lab &&
    t("labs.contents", { returnObjects: true }).some((item) => item.id === id)
  ) {
    // Older bookmarks used /projects/:id for research as well.
    return <Navigate to={`/lab/${id}`} replace />;
  }

  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <Link
        to={id ? list : "/"}
        className="inline-flex min-h-11 items-center text-sm text-primary underline"
      >
        {id ? `${t("ui.back")} · ${section.title}` : t("ui.home")}
      </Link>
      <div>
        <p className="mb-1 text-sm font-semibold text-primary">Zero-Plan</p>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      {selected && (
        <article className="max-w-prose space-y-4">
          <p className="text-muted-foreground">
            {selected.position} · {selected.date.from}
          </p>
          <p className="text-sm">{selected.tools}</p>
          <h2 className="text-lg font-semibold">{t("ui.overview")}</h2>
          <ul className="list-disc space-y-2 pl-5">
            {selected.descriptions.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ul>
          {selected.design && (
            <>
              <h2 className="text-lg font-semibold">{t("ui.design")}</h2>
              <p>{selected.design}</p>
            </>
          )}
          {selected.id === "private-cloud-home-infrastructure" && (
            <>
              <InfrastructureDiagram label={t("ui.diagram")} />
              <a className="text-primary underline" href={t("profile.blog")}>
                {t("ui.blog")}
              </a>
            </>
          )}
        </article>
      )}
      {!id && (
        <div className="grid gap-4 sm:grid-cols-2">
          {section.contents.map((item) => (
            <Link
              key={item.id}
              to={`${list}/${item.id}`}
              className="space-y-3 rounded-lg border bg-card p-5 hover:border-primary"
            >
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-muted-foreground">{item.position}</p>
              <p className="text-sm">{item.tools}</p>
              <p className="text-sm">{item.descriptions[0]}</p>
              <span className="text-sm text-primary underline">
                {t("ui.details")}
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
