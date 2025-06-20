import { ProjectItem } from "@/types/project";

export const projectData: ProjectItem[] = [
  {
    id: 0,
    title: "REACT/PYTHON 풀스택 프로젝트",
    image: "/projects/project1.png",
    category: "TEAMPROJECT",
    description:
      "React와 Tailwind를 사용해 제작한 개인 포트폴리오 웹사이트입니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    period: "2024.01 ~ 2024.02",
  },
  {
    id: 1,
    title: "React 프론트엔드 포트폴리오",
    image: "/projects/project1.png",
    category: "FRONTEND",
    description:
      "React와 Tailwind를 사용해 제작한 개인 포트폴리오 웹사이트입니다.",
    techStack: ["React", "TypeScript", "styled-component"],
    period: "2024.01 ~ 2024.02",
  },
  {
    id: 2,
    title: "Node.js 블로그 백엔드",
    image: "/projects/project2.png",
    category: "BACKEND",
    description: "REST API 기반의 블로그 백엔드를 Express로 구현했습니다.",
    techStack: ["Node.js", "Express", "Typescript"],
    period: "2024.03 ~ 2024.04",
  },
  {
    id: 3,
    title: "PHP 블로그 백엔드",
    image: "/projects/project2.png",
    category: "BACKEND",
    description: "REST API 기반의 블로그 백엔드를 Express로 구현했습니다.",
    techStack: ["PHP", "MySQL", "jQuery"],
    period: "2024.03 ~ 2024.04",
  },
  {
    id: 4,
    title: "UI/UX 리서치 프로젝트",
    image: "/projects/project3.png",
    category: "UI/UX",
    description: "사용자 리서치를 기반으로 한 모바일 앱 프로토타입 제작.",
    techStack: ["Figma", "Notion", "Adobe XD"],
    period: "2023.12 ~ 2024.01",
  },
];
