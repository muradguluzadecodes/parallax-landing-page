import { motion } from "framer-motion";
import useParallaxMotion from "../hooks/useParallaxMotion";

export default function Features() {
  const opacity1 = useParallaxMotion([0, 0.02], [0, 1]);
  const x1 = useParallaxMotion([0, 0.02], [200, 0]);
  const y1 = useParallaxMotion([0, 0.02], [100, 0]);

  // Second card
  const opacity2 = useParallaxMotion([0.02, 0.025], [0, 1]);
  const x2 = useParallaxMotion([0.02, 0.025], [200, 0]);
  const y2 = useParallaxMotion([0.02, 0.025], [100, 0]);

  // Third card
  const opacity3 = useParallaxMotion([0.025, 0.03], [0, 1]);
  const x3 = useParallaxMotion([0.025, 0.03], [200, 0]);
  const y3 = useParallaxMotion([0.025, 0.03], [100, 0]);
  return (
    <section className="relative z-[2] flex justify-between lg:flex-row flex-col gap-6 mt-10">
      <motion.div
        style={{
          x: x1,
          y: y1,
          opacity: opacity1,
        }}
        className="relative flex flex-col w-full gap-2 items-center justify-center px-6 py-4 rounded-full 
          bg-gradient-to-r from-[#963488]/20 via-[#FC6F32]/20 to-[#FF4A59]/20 p-[2px]"
      >
        <motion.h4
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
          }}
          viewport={{ once: true }}
          className="text-[40px] font-bold"
        >
          10,873
        </motion.h4>
        <p>LLM models</p>
      </motion.div>
      <motion.div
        style={{
          x: x2,
          y: y2,
          opacity: opacity2,
        }}
        className="relative flex flex-col w-full gap-2 items-center justify-center px-6 py-2 rounded-full 
               bg-gradient-to-r from-[#963488]/20 via-[#FC6F32]/20 to-[#FF4A59]/20 p-[2px]"
      >
        <motion.h4
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
            delay: 1,
          }}
          viewport={{ once: true }}
          className="text-[40px] font-bold"
        >
          $72,470,728
        </motion.h4>
        <p>paid to data scientists</p>
      </motion.div>
      <motion.div
        style={{
          x: x3,
          y: y3,
          opacity: opacity3,
        }}
        className="relative flex flex-col w-full gap-2 items-center justify-center px-6 py-2 rounded-full 
          bg-gradient-to-r from-[#963488]/20 via-[#FC6F32]/20 to-[#FF4A59]/20 p-[2px]"
      >
        <motion.h4
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
            delay: 1.4,
          }}
          viewport={{ once: true }}
          className="text-[40px] font-bold"
        >
          6,557
        </motion.h4>
        <p>members</p>
      </motion.div>
    </section>
  );
}
