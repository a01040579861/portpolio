import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const Main = () => {
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

  // ref 설정 함수
  const setLineRef = useCallback(
    (el: HTMLSpanElement | null, index: number) => {
      linesRef.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power3.out" },
    });

    linesRef.current.forEach((line, index) => {
      if (line) {
        tl.from(
          line,
          {
            x: -500,
            opacity: 0,
            delay: index === 0 ? 0 : 0.7,
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section className="w-full h-screen flex items-center justify-around text-[var(--light)] my-10 px-6">
      <div className="w-full h-screen flex justify-between items-center px-32">
        <div className="text-[var(--light)] space-y-4">
          <p className="text-5xl leading-normal font-light select-none">
            <span ref={(el) => setLineRef(el, 0)}>
              사람을 이해하려 투자한 8년이라는 시간
            </span>
            <br />
            <span ref={(el) => setLineRef(el, 1)}>
              그렇게 사람을 이해했고 이제는 사람과 기술을 연결하고 싶은
            </span>
            <br />
            <span
              ref={(el) => setLineRef(el, 2)}
              className="font-semibold text-8xl block"
            >
              Full Stack Developer 이성일
            </span>
            <span
              ref={(el) => setLineRef(el, 3)}
              className="block mt-8 text-4xl font-medium"
            >
              Project Completed 10+
            </span>
          </p>
        </div>
        <div className="md:flex self-stretch mt-10">
          <img
            src="/intro-ring.png"
            alt="Full Stack Developer Seong-il"
            className="w-[400px] h-[400px] mt-24 object-contain animate-spin-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
