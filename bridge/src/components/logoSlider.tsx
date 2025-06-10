"use client";

import { motion } from "framer-motion";

interface LogoSliderProps {
  logos: string[];
  folder: string;
  direction?: "left" | "right";
  speed?: number;
}

const LogoSlider = ({
  logos,
  folder,
  direction = "left",
  speed = 1000,
}: LogoSliderProps) => {
  const animation =
    direction === "left" ? { x: ["5%", "-40%"] } : { x: ["-40%", "5%"] };

  return (
    <div className="flex items-center justify-around overflow-hidden py-10">
      <motion.div
        className="flex gap-32 w-max"
        animate={animation}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {[...logos, ...logos].map((name, idx) => (
          <img
            key={`${folder}-${name}-${idx}`}
            src={`/images/${folder}/${name}.png`}
            alt={name}
            className="h-20 px-4 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
