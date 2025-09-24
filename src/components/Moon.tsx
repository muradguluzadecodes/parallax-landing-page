import { motion, useScroll, useTransform } from "framer-motion";

export default function Moon() {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0.8, 1], ["0deg", "180deg"]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.2, 1.2]);
  return (
    <section className="flex pt-[160px] pb-[150px] lg:px-20 flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between items-center">
      <div className="lg:w-[60%]">
        <motion.h2
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "backOut",
          }}
          viewport={{ once: true }}
          className="text-[40px] font-medium mb-4"
        >
          Join our community
        </motion.h2>
        <motion.p
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "backOut",
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mb-2"
        >
          Join us on our mission to to the moon & revolutionize open source AI
          development so that we can build a permissionless, democratized, and
          decentralized AI.
        </motion.p>
        <motion.p
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "backOut",
            delay: 0.6,
          }}
          viewport={{ once: true }}
        >
          Let the fate of AI be in our hands and not that of big tech companies.
        </motion.p>

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
            className="w-[40px]"
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
            className="w-[40px]"
          />
        </div>
      </div>
      <motion.img
        style={{
          rotate,
          scale,
        }}
        src="/images/moon-2.png"
        className="w-[400px]"
      />
    </section>
  );
}
