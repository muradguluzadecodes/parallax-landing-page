import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import useParallaxMotion from "../hooks/useParallaxMotion";

export default function Footer() {
  const isLg = useMediaQuery("(min-width: 1024px)");

  const endTranslate = isLg ? 200 : -30;

  const endScale = isLg ? 1 : 2.5;
  const translateY = useParallaxMotion([0.9, 1], [0, endTranslate]);
  const scale = useParallaxMotion([0.95, 1], [0, 1]);
  const scaleImg = useParallaxMotion([0.95, 1], [1, endScale]);
  const opacity = useParallaxMotion([0.95, 1], [0, 1]);

  return (
    <footer className="relative flex flex-col justify-between h-[400px] px-20 pb-10">
      <motion.img
        src="/images/nasa.png"
        className="absolute bottom-0 left-0 w-full"
        style={{
          translateY,
          scale: scaleImg,
        }}
      />

      <motion.h2
        style={{
          scale,
          opacity,
        }}
        className="text-center text-[30px]"
      >
        Join our community and harvest $SALT
      </motion.h2>
      <div className="relative z-[4] flex ">
        <div className="w-full">
          <div className="flex gap-6 justify-center items-center w-full pb-4 border-b-2 border-white/20">
            <button>How it works</button>
            <button>Buy Salt AI</button>
          </div>
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between items-center">
            <div className="flex gap-4 mt-6">
              <motion.img
                initial={{
                  rotate: "0",
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  rotate: "360deg",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
                viewport={{ once: true }}
                src="/images/logos/telegram.png"
                className="w-[30px]"
              />
              <motion.img
                initial={{
                  rotate: "0",
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  rotate: "-360deg",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
                viewport={{ once: true }}
                src="/images/logos/x.png"
                className="w-[30px]"
              />
            </div>
            <ul className="flex gap-4">
              <li className="text-white/40">Terms of Use</li>
              <li className="text-white/40">Privacy Policy</li>
              <li className="text-white/40">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
