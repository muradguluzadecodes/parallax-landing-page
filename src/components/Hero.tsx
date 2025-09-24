import { motion, useScroll, useTransform } from "framer-motion";
import { OutlineBtn } from "./OutlineBtn";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const isLg = useMediaQuery("(min-width: 1024px)");

  // Desktop vs Mobile sizes
  const startSize = isLg ? 100 : 50; // px
  const endSize = isLg ? 48 : 30; // px

  const startLine = isLg ? 130 : 74; // px (tweak as you like)
  const endLine = isLg ? 50 : 38; // px

  const color = useTransform(
    scrollYProgress,
    [0.02, 1],
    ["transparent", "#ffffff"]
  );
  const translateY = useTransform(scrollYProgress, [0, 0.02], [0, -50]);

  // Use the breakpoint-specific values in your transforms
  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.02],
    [`${startSize}px`, `${endSize}px`]
  );

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 0.02],
    [`${startLine}px`, `${endLine}px`]
  );

  const scaleMoon = useTransform(scrollYProgress, [0, 0.05], [1, 1.4]);
  const rotateMoon = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["0deg", "10deg"]
  );

  return (
    <section className="relative py-10">
      <motion.h1
        style={{ translateY, fontSize, color, lineHeight }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "backOut" }}
        viewport={{ once: true }}
        // keep text classes minimal; inline styles will control size
        className="relative z-[2] h-fit font-medium bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 bg-clip-text text-transparent"
      >
        A new economic primitive <br />
        for funding decentralized AI
      </motion.h1>

      <motion.p
        style={{ translateY }}
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn", delay: 0.6 }}
        viewport={{ once: true }}
        className="text-white my-6 relative z-[2]"
      >
        We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI
      </motion.p>

      <div className="flex gap-6">
        <OutlineBtn initialX={-30} btnText="Buy Spice AI" />
        <motion.button
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          Try now
        </motion.button>
      </div>

      <motion.img
        style={{ scale: scaleMoon, rotate: rotateMoon }}
        src="../../src/assets/images/moon.png"
        className="w-[700px] absolute right-[-20%] top-0 z-[1]"
      />
    </section>
  );
}
