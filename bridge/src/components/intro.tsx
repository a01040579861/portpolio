const Intro = () => {
  return (
    <section className="h-screen flex items-center justify-around text-white px-6 overflow-hidden">
      <div className="h-screen flex gap-x-96 items-center">
        <div className="text-white space-y-4">
          <p className="text-5xl leading-normal font-light select-none">
            사람을 이해하려 투자한 8년이라는 시간
            <br />
            그렇게 사람을 이해했고 이제는 사람과 기술을 연결하고 싶은
            <br />
            <span className="font-semibold text-6xl">
              Full Stack Developer 이성일
            </span>
            입니다.
          </p>
          <p className="text-4xl mt-8 font-medium">Project Completed 10+</p>
        </div>
        <div className="md:flex self-stretch mt-10">
          <img
            src="/intro-ring.png"
            alt="Full Stack Developer Seong-il"
            className="w-[400px] h-[400px] object-contain animate-spin-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
