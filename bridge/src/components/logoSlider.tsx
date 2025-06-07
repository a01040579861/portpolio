"use client";

import { motion } from "framer-motion";

const logos = [
  "html",
  "css",
  "js",
  "react",
  "redux",
  "ajax",
  "jquery",
  "sass",
  "styled-component",
  "tailwind",
];

const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden bg-black py-6">
      <motion.div
        className="flex gap-24 w-max"
        animate={{ x: ["0%", "-50%"] }} // 슬라이더를 절반만 밀면 반복이 자연스러움
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {/* 두 세트를 연결 */}
        {[...logos, ...logos].map((name, idx) => (
          <img
            key={`${name}-${idx}`}
            src={`/images/logo_1/${name}.png`}
            alt={name}
            className="h-20 w-auto transition-transform duration-300 hover:scale-110 drop-shadow-md hover:drop-shadow-xl"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
