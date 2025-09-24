import { useScroll, useTransform } from "framer-motion";

export default function useParallaxMotion(
  screenPositions: number[],
  fromTo: any[]
) {
  const { scrollYProgress } = useScroll();
  const result = useTransform(scrollYProgress, screenPositions, fromTo);

  return result;
}
