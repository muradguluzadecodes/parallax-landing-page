import { motion } from "framer-motion";
import { OutlineBtn } from "./OutlineBtn";

export default function Header() {
  motion;
  return (
    <header className="w-full py-10 flex gap-10 justify-center items-center">
      <motion.button
        initial={{
          x: -50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
        className="text-white"
      >
        LLM Leaderboard
      </motion.button>
      <OutlineBtn btnText="Buy Spice AI" />
    </header>
  );
}
