export type ResumeEntry = {
  name: string;
  date: { from: string; to?: string };
  position?: string;
  tools?: string;
  descriptions?: string[];
  image?: string;
};

export type ResumeSection<T = ResumeEntry> = { title: string; contents: T[] };
type Project = ResumeEntry & {
  id: string;
  position: string;
  tools: string;
  descriptions: string[];
  design?: string;
};

type SectionName =
  "experiences" | "careers" | "education" | "portfolio" | "certificates";
type Label =
  | "navigation"
  | "skip"
  | "projects"
  | "lab"
  | "language"
  | "dark"
  | "light"
  | "exploreProjects"
  | "exploreLab"
  | "back"
  | "home"
  | "missing"
  | "missingPage"
  | "overview"
  | "design"
  | "diagram"
  | "blog"
  | "details"
  | "history";

type Resume = Record<SectionName, ResumeSection> & {
  featured: ResumeSection<Project>;
  labs: ResumeSection<Project>;
  skill: ResumeSection<{ title: string; items: { title: string }[] }>;
  project: { title: string };
  profile: Record<
    "name" | "email" | "position" | "description" | "blog" | "github",
    string
  >;
  update: Record<"description" | "date" | "note", string>;
  ui: Record<Label, string>;
};

declare module "i18next" {
  interface CustomTypeOptions {
    resources: { translation: Resume };
  }
}
