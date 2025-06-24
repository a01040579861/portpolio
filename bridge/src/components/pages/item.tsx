"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Item = () => {
  const slideContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SECTION 1: 텍스트 애니메이션
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top top",
          end: "+=500%",
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      tl.from("#section1 h1", {
        opacity: 0,
        y: 100,
        duration: 1,
      })
        .from(
          "#section1 h2",
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          "#section1 .cta-button",
          {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .to(
          "#section1",
          {
            duration: 1.2,
          },
          "-=0.5"
        )
        .to(
          "#section1 h1, #section1 h2",
          {
            color: "var(--sub)",
            duration: 1,
          },
          "-=1"
        );

      // SECTION 2~: 가로 슬라이드
      const sections = gsap.utils.toArray(".panel");

      if (slideContainerRef.current && sections.length) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: slideContainerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + slideContainerRef.current!.offsetWidth,
          },
        });
      }
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      {/* SECTION 1 */}
      <section
        id="section1"
        className="w-full h-screen mt-6 flex flex-col justify-center items-center text-[var(--light)] px-6"
      >
        <h1 className="text-5xl font-bold mb-4">Bridge</h1>
        <h2 className="text-2xl mb-8">스크롤하면 등장합니다</h2>
      </section>

      {/* SECTION 2~: 가로 슬라이드 */}
      <section className="h-full w-screen mb-6 overflow-hidden">
        <div
          ref={slideContainerRef}
          className="flex h-screen w-[300vw] overflow-x-hidden"
        >
          <div className="panel w-screen h-screen flex items-center justify-center text-[var(--sub)] text-5xl font-bold">
            Slide 1
          </div>
          <div className="panel w-screen h-screen flex items-center justify-center text-[var(--sub)] text-5xl font-bold">
            Slide 2
          </div>
          <div className="panel w-screen h-screen flex items-center justify-center text-[var(--sub)] text-5xl font-bold">
            Slide 3
          </div>
        </div>
      </section>
    </>
  );
};

export default Item;
