export type ProjectCategory =
  | "ALL"
  | "TEAMPROJECT"
  | "BACKEND"
  | "FRONTEND"
  | "UI/UX";

export interface ProjectItem {
  id: number;
  title: string;
  image?: string;
  video?: string;
  category: ProjectCategory;
  description: string;
  techStack: string[];
  members: string;
  period: string;
  architecture: string;
  thumbnail: string;
}
