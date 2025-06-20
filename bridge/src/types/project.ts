export type ProjectCategory =
  | "ALL"
  | "TEAMPROJECT"
  | "BACKEND"
  | "FRONTEND"
  | "UI/UX";

export interface ProjectItem {
  id: number;
  title: string;
  image: string;
  category: ProjectCategory;
  description: string;
  techStack: string[];
  period: string;
}
