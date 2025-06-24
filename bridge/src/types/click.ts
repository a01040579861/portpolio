export type SectionName = "profile" | "project" | "item" | "point";

export interface HeaderProps {
  onNavigate: (section: SectionName) => void;
}
