import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useAnimationControls,
} from "framer-motion";

function Experiment() {
  const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollY, "change", (val) => {
  //   console.log(val);
  // });

  const translateX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [600, 0]);

  const controlls = useAnimationControls();

  // console.log(translateX);

  const handleClick = () => {
    controlls.start("banana");
  };

  // const scroll = useTransform(scrollY, [50, 200], [1, 4]);

  return (
    <div className="h-[200vh] min-h-[200vh] !overflow-scroll !bg-red-500">
      <motion.div className="flex w-full  items-center h-full ">
        <motion.button
          style={{
            translateX,
            translateY,
          }}
          onClick={handleClick}
          className="flex justify-center items-center bg-orange-300 rounded-full px-6"
        >
          Click me!
        </motion.button>
        <motion.h1
          className="ml-10"
          // style={{ translateX }}
          // animate={{
          //   rotate: "180deg",
          //   y: [0, 150],
          //   x: [0, 200],
          // }}
          transition={{
            duration: 2,
            type: "spring",
            ease: "easeInOut",
          }}
          variants={{
            initial: {
              rotate: "0deg",
              y: 0,
              x: 0,
            },
            banana: {
              rotate: "180deg",
              x: [0, 100],
            },
          }}
          exit={{
            rotate: "0deg",
          }}
          animate={controlls}
          whileInView={{
            x: 500,
          }}
          whileTap="banana"
          initial="initial"
          // style={{ scroll }}
        >
          lorem
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default Experiment;
