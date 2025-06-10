const Project = () => {
  return (
    <section className="h-full grid place-items-center text-white px-2">
      <div className="text-center">
        <div className="text-5xl h-20 font-bold select-none">TOTAL PROJECT</div>
        <div className="grid grid-cols-5 text-3xl text-center cursor-pointer">
          {["ALL", "BACKEND", "FRONTEND", "PUBLISHING", "UI/UX"].map(
            (label, idx) => (
              <div
                key={idx}
                className="w-auto h-50 px-8 py-6 hover:bg-white hover:text-black text-white transition-colors duration-300 rounded-2xl"
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-20 mt-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="relative group w-[300px] h-[300px] overflow-hidden cursor-pointer"
          >
            <img
              src="/"
              alt={`ring-${index}`}
              className="w-full h-full object-cover"
            />

            {/* 왼쪽 상단 → 우측 상단 */}
            <span className="absolute top-0 left-0 w-full h-[5px] bg-purple-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>

            {/* 왼쪽 상단 → 좌측 하단 */}
            <span className="absolute top-0 left-0 h-full w-[5px] bg-purple-400 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out delay-100"></span>

            {/* 오른쪽 하단 → 좌측 하단 */}
            <span className="absolute bottom-0 right-0 w-full h-[5px] bg-purple-400 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out delay-100"></span>

            {/* 오른쪽 하단 → 우측 상단 */}
            <span className="absolute bottom-0 right-0 h-full w-[5px] bg-purple-400 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out delay-100"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
