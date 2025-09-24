import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";

const logos = [
  "solana.png",
  "arweave.png",
  "bittensor.png",
  "render.png",
  "telegram.png",
  "solana.png",
  "arweave.png",
  "bittensor.png",
  "render.png",
  "telegram.png",
];

export default function Brands() {
  const { scrollYProgress } = useScroll();

  const translateX = useTransform(scrollYProgress, [0.6, 0.8], [0, -300]);
  const scale = useTransform(scrollYProgress, [0.6, 0.7], [4, 1]);
  const opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  return (
    <section className="lg:pt-[300px] pt-[150px] ">
      <motion.h2
        style={{
          scale,
          opacity,
        }}
        className="text-center text-[36px] mb-20 lg:mb-40"
      >
        {" "}
        Projects integrated into the Arrakis AI Ecosystem
      </motion.h2>

      <motion.div
        style={{
          translateX,
        }}
        className="flex w-full max-w-[100vw] justify-between lg:gap-[86px] gap-10  "
      >
        {logos.map((img, i) => (
          <div
            className={clsx(
              (img === "telegram.png" || img === "render.png") &&
                "!w-[50px] !min-w-[50px] !lg:w-[80px] !lg:min-w-[80px]",
              "w-[150px] min-w-[150px]  lg:w-[300px] lg:min-w-[300px] h-auto flex items-center justify-center"
            )}
          >
            <img key={img + i} src={`../../src/assets/images/logos/${img}`} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
