import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Entry = { name: string; position?: string; tools?: string; descriptions?: string[] };
const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function Architecture({ ko }: { ko: boolean }) {
  return <figure className="my-6 rounded-lg border p-4">
    <figcaption className="mb-4 text-sm font-semibold">{ko ? "인프라 개념도 (실제 네트워크 주소 생략)" : "Infrastructure overview (network addresses omitted)"}</figcaption>
    <svg role="img" aria-label="Proxmox and OCI infrastructure overview" viewBox="0 0 360 220" className="mx-auto w-full max-w-xl">
      <g fill="none" stroke="currentColor" opacity=".6"><path d="M180 40V60H85V80M180 60H275V80M85 120V140M275 120V140"/></g>
      {[[110,5,140,35,"Remote access"],[10,80,150,40,"Proxmox VE"],[200,80,150,40,"OCI ARM"],[10,140,150,65,"NAS / VM / Backup"],[200,140,150,65,"Docker / Media"]].map(([x,y,w,h,label]) => <g key={label}><rect x={Number(x)} y={Number(y)} width={Number(w)} height={Number(h)} rx="6" fill="var(--muted)" stroke="var(--border)"/><text x={Number(x)+Number(w)/2} y={Number(y)+Number(h)/2+4} textAnchor="middle" fontSize="12" fill="currentColor">{label}</text></g>)}
    </svg>
  </figure>;
}

export default function Projects({ lab = false }: { lab?: boolean }) {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const ko = i18n.language.startsWith("ko");
  const featured = t("featured.contents", { returnObjects: true }) as Entry[];
  const labs = t("labs.contents", { returnObjects: true }) as Entry[];
  const entries = lab ? labs : [...featured, ...labs];
  const selected = id ? entries.find(item => slug(item.name) === id) : undefined;
  if (id && !selected) return <section><h1>{ko ? "프로젝트를 찾을 수 없습니다." : "Project not found."}</h1><Link to="/projects">Projects</Link></section>;
  return <section className="mx-auto max-w-4xl space-y-6">
    <title>{(selected?.name ?? (lab ? "Research & Labs" : "Projects")) + " | 0plan"}</title>
    <Link to={id ? "/projects" : "/"} className="text-sm underline">{ko ? "뒤로" : "Back"}</Link>
    <h1 className="text-3xl font-bold">{selected?.name ?? (lab ? t("labs.title") : t("featured.title"))}</h1>
    {selected ? <article className="space-y-4">
      <p className="text-muted-foreground">{selected.position}</p>
      <p className="text-sm">{selected.tools}</p>
      <h2 className="text-lg font-semibold">{ko ? "프로젝트 개요 및 작업 내용" : "Overview and work"}</h2>
      <ul className="list-disc space-y-2 pl-5">{selected.descriptions?.map(d => <li key={d}>{d}</li>)}</ul>
      {selected.name.startsWith("Private Cloud") && <Architecture ko={ko}/>}
      {selected.name.startsWith("Private Cloud") && <a className="underline" href={t("profile.blog")}>{ko ? "관련 기술 블로그" : "Related technical blog"}</a>}
      <p className="text-sm text-muted-foreground">{ko ? "공개 가능한 범위의 개요이며, 측정되지 않은 성능 지표는 포함하지 않았습니다." : "Public overview; unmeasured performance metrics are intentionally omitted."}</p>
    </article> : <div className="grid gap-4 sm:grid-cols-2">{(lab ? labs : featured).map(item => <Link key={item.name} to={"/projects/" + slug(item.name)} className="space-y-3 rounded-lg border bg-card p-5 hover:border-foreground"><h2 className="font-semibold">{item.name}</h2><p className="text-sm text-muted-foreground">{item.position}</p><p className="text-sm">{item.tools}</p><p className="text-sm">{item.descriptions?.[0]}</p><span className="text-sm underline">{ko ? "상세 보기" : "Details"}</span></Link>)}</div>}
  </section>;
}