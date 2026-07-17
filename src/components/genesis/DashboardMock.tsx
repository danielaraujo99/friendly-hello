import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.png.asset.json";

export function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[480px]"
    >
      {/* Outer purple ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-20 rounded-[2.75rem] opacity-80"
        style={{
          background:
            "radial-gradient(closest-side, rgba(122,92,255,0.45), rgba(122,92,255,0.10) 55%, transparent 75%)",
          filter: "blur(28px)",
        }}
      />

      {/* Stacked back plate (offset shadow card, like the reference) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 translate-x-3 translate-y-4 rounded-[2rem] bg-[#0f0a1f] border border-white/[0.06] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
      />

      {/* Bezel / frame */}
      <div className="relative rounded-[2rem] bg-gradient-to-b from-[#1a1330] to-[#0f0a1f] p-3 border border-white/10 shadow-[0_25px_60px_-15px_rgba(91,61,245,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="relative rounded-[1.4rem] overflow-hidden aspect-square bg-[#0d0819]">
          <img
            src={heroVisual.url}
            alt="Genesis Hub"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
          {/* subtle inner highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] ring-1 ring-inset ring-white/10" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-[1.4rem]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
