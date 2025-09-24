import { motion } from "framer-motion";

export const OutlineBtn = ({
  btnText,
  initialX = 30,
}: {
  btnText: string;
  initialX?: number;
}) => {
  return (
    <motion.button
      initial={{
        x: initialX,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.6,
        ease: "backOut",
      }}
      viewport={{ once: true }}
      className="relative inline-flex items-center  rounded-full 
               bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 p-[2px] z-[2]"
    >
      <span className="bg-black text-white rounded-full px-6 py-2">
        {btnText}
      </span>
    </motion.button>
  );
};
