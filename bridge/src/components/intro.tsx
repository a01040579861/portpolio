"use client";
import { motion } from "framer-motion";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="relative w-screen h-screen bg-[var(--main)] overflow-hidden z-50">
      {/* 다리 애니메이션 영역 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 150 Q 300 50 550 150"
            stroke="var(--light)"
            strokeWidth="3"
            fill="transparent"
            className="animate-[dash_2s_ease-in-out_forwards]"
          />
        </svg>
      </motion.div>

      {/* 로고와 텍스트 */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-[var(--light)] text-4xl font-bold cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={onFinish}
      >
        <span className="text-6xl font-extrabold tracking-widest">BRIDGE</span>
        <span className="text-lg mt-4 text-gray-300">
          Connecting People and Technology
        </span>
        <span className="mt-6 text-sm text-gray-400 animate-pulse">
          Click to Enter
        </span>
      </motion.div>
    </div>
  );
}
