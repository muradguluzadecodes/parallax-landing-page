import { motion } from "framer-motion";
import { OutlineBtn } from "./OutlineBtn";
import Leaderboard from "./LoaderBoard";
import { ArrowUp } from "../assets/icons";
import useParallaxMotion from "../hooks/useParallaxMotion";

export default function Table() {
  const translateY = useParallaxMotion([0.3, 0.35], [-300, 0]);
  const opacity = useParallaxMotion([0.3, 0.35], [0, 1]);

  return (
    <section>
      <motion.div
        style={{
          translateY,
          opacity,
        }}
        className="w-full flex items-center justify-between mb-6"
      >
        <motion.h2 className="text-[32px]">LLM Leaderboard</motion.h2>
        <OutlineBtn btnText="Submit your model" />
      </motion.div>
      <motion.p
        style={{
          translateY,
          opacity,
        }}
      >
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </motion.p>

      <Leaderboard />
      <div className="flex justify-end mt-6">
        <button className="flex items-center gap-5  ">
          <p>View full leaderboard</p>
          <div className="flex justify-center items-center border-2 border-white rounded-full w-[50px] h-[50px]">
            <ArrowUp color="#ffffff" />
          </div>
        </button>
      </div>
    </section>
  );
}
