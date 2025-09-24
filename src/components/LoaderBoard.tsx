import { ArrowDown, ArrowUp } from "../assets/icons";

import { motion, useScroll, useTransform } from "framer-motion";

const data = [
  {
    rank: 1,
    name: "Model_Name123",
    avg: 81.22,
    arc: 81.22,
    hellaswag: 81.22,
    mmlu: 81.22,
    truthfulqa: 81.22,
    winogrande: 81.22,
    gsm8k: 81.22,
    earnings: "2,854,004",
    change: "same",
  },
  {
    rank: 2,
    name: "AlphaFusion-L",
    avg: 80.91,
    arc: 81.05,
    hellaswag: 82.1,
    mmlu: 80.66,
    truthfulqa: 79.98,
    winogrande: 81.44,
    gsm8k: 79.77,
    earnings: "2,431,887",
    change: "up",
  },
  {
    rank: 3,
    name: "NeuroMix-XL",
    avg: 80.4,
    arc: 79.9,
    hellaswag: 80.88,
    mmlu: 80.12,
    truthfulqa: 80.01,
    winogrande: 80.77,
    gsm8k: 79.55,
    earnings: "2,188,420",
    change: "down",
  },
  {
    rank: 4,
    name: "QuantumText-L",
    avg: 79.2,
    arc: 78.7,
    hellaswag: 79.88,
    mmlu: 78.95,
    truthfulqa: 79.02,
    winogrande: 79.66,
    gsm8k: 78.44,
    earnings: "1,712,040",
    change: "same",
  },
  {
    rank: 5,
    name: "Orion-13B",
    avg: 78.85,
    arc: 78.44,
    hellaswag: 79.66,
    mmlu: 78.91,
    truthfulqa: 78.32,
    winogrande: 78.77,
    gsm8k: 78.55,
    earnings: "1,604,221",
    change: "up",
  },
  {
    rank: 6,
    name: "HyperAI-M",
    avg: 78.3,
    arc: 77.9,
    hellaswag: 78.7,
    mmlu: 78.1,
    truthfulqa: 77.8,
    winogrande: 78.2,
    gsm8k: 77.6,
    earnings: "1,502,110",
    change: "down",
  },
  {
    rank: 7,
    name: "CognitiveNet-S",
    avg: 77.8,
    arc: 77.3,
    hellaswag: 77.9,
    mmlu: 77.6,
    truthfulqa: 77.1,
    winogrande: 77.5,
    gsm8k: 77.2,
    earnings: "1,398,540",
    change: "same",
  },
  {
    rank: 8,
    name: "DeepLogic-X",
    avg: 77.2,
    arc: 76.8,
    hellaswag: 77.6,
    mmlu: 77.0,
    truthfulqa: 76.7,
    winogrande: 76.9,
    gsm8k: 76.4,
    earnings: "1,305,334",
    change: "up",
  },
  {
    rank: 9,
    name: "NeuroPrime",
    avg: 76.5,
    arc: 76.1,
    hellaswag: 76.8,
    mmlu: 76.2,
    truthfulqa: 75.9,
    winogrande: 76.3,
    gsm8k: 75.7,
    earnings: "1,212,009",
    change: "down",
  },
  {
    rank: 10,
    name: "LogicFlow-B",
    avg: 75.9,
    arc: 75.5,
    hellaswag: 76.1,
    mmlu: 75.8,
    truthfulqa: 75.3,
    winogrande: 75.6,
    gsm8k: 75.1,
    earnings: "1,108,776",
    change: "same",
  },
];

export default function Leaderboard() {
  const { scrollYProgress } = useScroll();

  const translateY = useTransform(scrollYProgress, [0.3, 0.35], [300, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  return (
    <div className="py-6   text-slate-200 overflow-scroll lg:overflow-hidden">
      <div>
        <motion.table
          style={{
            opacity,
            translateY,
            scale,
          }}
          className="min-w-full border-separate border-spacing-y-2 text-sm"
        >
          <thead>
            <tr className="text-slate-400 text-xs uppercase">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Model Name</th>
              <th className="px-4 py-2 text-right">Average</th>
              <th className="px-4 py-2 text-right">ARC</th>
              <th className="px-4 py-2 text-right">HellaSwag</th>
              <th className="px-4 py-2 text-right">MMLU</th>
              <th className="px-4 py-2 text-right">TruthfulQA</th>
              <th className="px-4 py-2 text-right">Winogrande</th>
              <th className="px-4 py-2 text-right">GSM8K</th>
              <th className="px-4 py-2 text-right">Earnings</th>
            </tr>
          </thead>
          <tbody className="relative">
            <motion.img
              initial={{
                y: 0,
                opacity: 1,
              }}
              whileInView={{
                y: -1000,
                opacity: 0,
              }}
              transition={{
                duration: 4,
                type: "spring",
                ease: "circInOut",
                delay: 0.6,
              }}
              viewport={{ once: true }}
              src="/images/rocket.png"
              className="absolute w-[140px] left-[180px] lg:left-60 bottom-[-180px]"
            />
            {data.map((row) => (
              <tr
                key={row.rank}
                className="odd:bg-[#C9D9FF14]/10 hover:bg-slate-900/80 transition rounded-lg"
              >
                <td className="px-4 py-4 ">
                  <div className="flex items-center gap-4">
                    {row.change === "up" && <ArrowUp />}
                    {row.change === "down" && <ArrowDown />}
                    {row.change === "same" && (
                      <span className="text-slate-500">—</span>
                    )}
                    {row.rank}
                  </div>
                </td>
                <td className="pr-[100px] py-3 ">{row.name}</td>
                <td className="px-4 py-3 text-right">{row.avg}</td>
                <td className="px-4 py-3 text-right">{row.arc}</td>
                <td className="px-4 py-3 text-right">{row.hellaswag}</td>
                <td className="px-4 py-3 text-right">{row.mmlu}</td>
                <td className="px-4 py-3 text-right">{row.truthfulqa}</td>
                <td className="px-4 py-3 text-right">{row.winogrande}</td>
                <td className="px-4 py-3 text-right">{row.gsm8k}</td>
                <td className="px-4 py-3 text-right">${row.earnings}</td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
}
