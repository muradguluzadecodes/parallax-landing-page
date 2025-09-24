import { OutlineBtn } from "./OutlineBtn";
import { motion } from "framer-motion";

export default function OurCollective() {
  return (
    <section className="pt-[20px] lg:pt-[80px] pb-[200px] lg:w-[50%] w-full">
      <motion.img
        src="/images/star.png"
        className="w-[200px] mb-40"
        initial={{
          x: 0,
          y: -200,
          opacity: 1,
        }}
        whileInView={{
          x: 2000,
          y: 1000,
          opacity: 0, // fade out
        }}
        transition={{
          duration: 7,
          type: "spring",
          ease: "easeOut",
          delay: 2,
        }}
        viewport={{ once: true }}
      />
      <motion.h2
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          type: "spring",
          ease: "easeOut",
          delay: 0.5,
        }}
        viewport={{ once: true }}
        className="lg:text-[42px] text-[30px] font-medium"
      >
        Crowdsourcing our collective intelligence to build the best AI
      </motion.h2>
      <motion.p
        initial={{
          x: 30,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1, // fade out
        }}
        transition={{
          duration: 1.6,
          type: "spring",
          ease: "easeOut",
          delay: 0.5,
        }}
        viewport={{ once: true }}
        className="my-6"
      >
        Open source AIs have been lagging in development behind OpenAI with
        billions of dollars.We run competitions between AI models to find and
        pay for the best AI model. Users will be able to access the best AI
        models.
      </motion.p>
      <OutlineBtn btnText="Use the cutting edge AI" />
    </section>
  );
}
