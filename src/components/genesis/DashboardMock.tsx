import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.png.asset.json";

export function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[460px]"
    >
      {/* Soft outer purple glow ring (like the reference red glow) */}
      <div
        aria-hidden
        className="absolute -inset-3 -z-10 rounded-[2rem] opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(122,92,255,0.35), rgba(122,92,255,0.08) 60%, transparent 75%)",
          filter: "blur(18px)",
        }}
      />

      <div className="relative rounded-[1.75rem] p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent">
        <div className="relative rounded-[1.7rem] overflow-hidden aspect-square bg-[#0d0819]">
          <img
            src={heroVisual.url}
            alt="Genesis Hub"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </motion.div>
  );
}
