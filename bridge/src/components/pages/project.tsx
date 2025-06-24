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
  const [isDetailOpen, setIsDetailOpen] = useState(true);

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
        <div className="text-6xl h-20 my-10 font-bold select-none">PROJECT</div>
        <div className="grid grid-cols-5  gap-10 my-10 text-3xl text-center cursor-pointer">
          {categories.map((label, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCategory(label)}
              className={`w-auto h-50 px-4 py-3 transition-all duration-300 
            ${
              selectedCategory === label
                ? "bg-[var(--main)] text-[var(--sub2)] shadow-md scale-105"
                : "bg-transparent text-[var(--light)]"
            }`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-8 mt-4">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleImageClick(index)}
            className="relative group w-[300px] h-[300px] overflow-hidden cursor-pointer hover:shadow-custom transition-shadow duration-300 bg-[var(--main)] flex items-center justify-center text-2xl font-bold"
          >
            <img
              src={project.thumbnail}
              alt={`${project.title} 썸네일`}
              className="object-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            />

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
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-[var(--main)] flex justify-center items-center transition-opacity duration-300 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[var(--main)] max-w-[90%] w-full max-h-[80%] overflow-y-auto relative animate-zoomIn rounded-lg flex flex-col"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-4 text-3xl font-bold text-[var(--light)] hover:text-[var(--sub2)] duration-300"
            >
              ✕
            </button>
            <div className="text-2xl text-gray-400 mt-10 h-[auto] bg-[var(--main)] bg-opacity-10 border border-red-300">
              {/* 드롭다운 헤더 */}
              <div
                onClick={() => setIsDetailOpen((prev) => !prev)}
                className="p-8 mb-4 text-3xl font-semibold cursor-default flex justify-between items-center text-[var(--light)]"
              >
                프로젝트 상세 정보
                <span className="text-2xl hover:text-[var(--sub2)] cursor-pointer transition">
                  {isDetailOpen ? "닫기" : "열기"}
                </span>
              </div>

              {/* 드롭다운 내용 - 항상 렌더링 + 상태에 따라 트랜지션 */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden bg-[var(--main)] bg-opacity-10 px-8 space-y-6 ${
                  isDetailOpen
                    ? "max-h-[1000px] opacity-100 py-8"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                <p className="text-5xl mb-10 font-bold text-[var(--light)]">
                  {filteredProjects[selectedIndex].description}
                </p>
                <p className="text-3xl mb-10 text-[var(--light)]">
                  <strong>프로젝트 기간:</strong>{" "}
                  {filteredProjects[selectedIndex].period}
                </p>
                <p className="text-3xl mb-10 text-[var(--light)]">
                  <strong>프로젝트 참여인원:</strong>{" "}
                  {filteredProjects[selectedIndex].members}명
                </p>
                <div>
                  <div className="text-2xl mb-10 font-semibold">기술 스택</div>
                  <div className="flex flex-wrap gap-3">
                    {filteredProjects[selectedIndex].techStack.map(
                      (tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[var(--sub2)] text-[var(--light)] px-2 py-1 rounded-md text-xl hover:bg-[var(--sub)] duration-300 cursor-default mb-10"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
                {filteredProjects[selectedIndex].architecture ? (
                  <img
                    src={filteredProjects[selectedIndex].architecture}
                    alt={filteredProjects[selectedIndex].title}
                    className="w-[32%] object-contain bg-no-repeat bg-center"
                  />
                ) : (
                  <div className="text-2xl mb-10 font-semibold text-[var(--light)] cursor-default">
                    피그마 프로젝트
                  </div>
                )}
              </div>
            </div>

            {filteredProjects[selectedIndex] && (
              <div className="mt-6">
                {/* 비디오 or 이미지 조건 렌더링 */}
                {filteredProjects[selectedIndex].video ? (
                  <video
                    src={filteredProjects[selectedIndex].video}
                    controls
                    className="w-full rounded-lg mb-4"
                  />
                ) : (
                  <img
                    src={filteredProjects[selectedIndex].image}
                    alt={filteredProjects[selectedIndex].title}
                    className="w-full object-contain rounded-lg mb-4"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
