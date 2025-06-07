const Intro = () => {
  return (
    <section className="flex justify-between items-center h-screen px-20 bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden">
      <div className="text-white space-y-4">
        <p className="text-6xl leading-normal font-light select-none">
          사람을 이해하려 투자한 8년이라는 시간..
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
      <div className="hidden md:flex self-start mt-10">
        <img
          src="/intro_ring.png"
          alt="Full Stack Developer Seong-Il"
          className="w-[300px] h-[300px] object-contain animate-spin-slow"
        />
      </div>
    </section>
  );
};

export default Intro;
