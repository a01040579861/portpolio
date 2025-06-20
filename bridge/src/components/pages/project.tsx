"use client";

import { useState, useEffect } from "react";
import { projectData } from "@/data/projectData";
import { ProjectCategory, ProjectItem } from "@/types/project";

const categories: ProjectCategory[] = [
  "ALL",
  "TEAMPROJECT",
  "FRONTEND",
  "BACKEND",
  "UI/UX",
];

const Project = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("ALL");

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // 컴포넌트 언마운트 시 복원
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const filteredProjects: ProjectItem[] =
    selectedCategory === "ALL"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <section className="h-full grid place-items-center text-[var(--light)] my-10">
      <div className="text-center">
        <div className="text-6xl h-20 my-10 font-bold select-none">
          TOTAL PROJECT
        </div>
        <div className="grid grid-cols-5 my-10 text-3xl text-center cursor-pointer">
          {["ALL", "TEAMPROJECT", "BACKEND", "FRONTEND", "UI/UX"].map(
            (label, idx) => (
              <div
                key={idx}
                className="w-auto h-50 px-4 py-3 hover:bg-[var(--main)] hover:text-[var(--sub2)] text-[var(--light)] transition-colors duration-300 rounded-xl"
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-16 mt-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="relative group w-[300px] h-[300px] overflow-hidden cursor-pointer hover:shadow-custom transition-shadow duration-300 bg-[var(--main)] flex items-center justify-center text-2xl font-bold"
          >
            Project {index + 1}
            {/* 테두리 애니메이션 */}
            <span className="absolute top-0 left-0 w-full h-[3px] bg-purple-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            <span className="absolute top-0 left-0 h-full w-[3px] bg-purple-400 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out delay-100"></span>
            <span className="absolute bottom-0 right-0 w-full h-[3px] bg-purple-400 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out delay-100"></span>
            <span className="absolute bottom-0 right-0 h-full w-[3px] bg-purple-400 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out delay-100"></span>
          </div>
        ))}
      </div>

      {/* 모달창 */}
      {modalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-[var(--main)] bg-opacity-70 flex justify-center items-center transition-opacity duration-300 animate-fadeIn">
          <div className="bg-[var(--light)] text-[var(--main)] rounded-xl p-8 w-[600px] relative transform transition-all duration-300 scale-95 animate-zoomIn">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-4 text-ml font-bold text-gray-600 hover:text-sub2"
            >
              ✕
            </button>
            <div className="mt-2">
              <h2 className="text-4xl font-semibold mb-4">
                Project #{selectedIndex + 1}
              </h2>
              <p className="text-2xl leading-relaxed">
                이 프로젝트는 실제 이미지는 없지만,
                <br />
                클릭 시 이렇게 자세한 내용을 보여주는 모달을 띄울 수 있어요.
              </p>
              <ul className="mt-4 list-disc pl-5 text-2xl text-gray-700 space-y-1">
                <li>기술 스택: React, TypeScript, Tailwind</li>
                <li>기간: 2024.01 ~ 2024.03</li>
                <li>기능: 로그인, 대시보드, 그래프 시각화 등</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
