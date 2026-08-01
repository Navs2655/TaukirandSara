"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ImagePlus } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// Placeholder slots — replace each `src` with a real photo when ready.
// Uneven rotation/offset per card is intentional (avoids a rigid grid feel).
const SLOTS = [
  { src: null, rotate: -3, offset: 0 },
  { src: null, rotate: 2, offset: 24 },
  { src: null, rotate: -1.5, offset: -12 },
  { src: null, rotate: 3, offset: 16 },
  { src: null, rotate: -2.5, offset: 0 },
  { src: null, rotate: 1.5, offset: -20 },
];

function GalleryCard({
  rotate,
  offset,
  index,
}: {
  rotate: number;
  offset: number;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      animate={
        inView ? { opacity: 1, y: offset, rotate } : { opacity: 0, y: 40, rotate: 0 }
      }
      transition={{ duration: 0.9, delay: index * 0.1, ease: EASE }}
      whileHover={{ rotate: 0, scale: 1.04, y: offset - 6 }}
      className="relative aspect-[3/4] rounded-xl border border-gold/20 bg-white/[0.04] backdrop-blur-sm overflow-hidden flex items-center justify-center transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(200,162,79,0.15)]"
    >
      <div className="flex flex-col items-center gap-3 text-champagne/25">
        <ImagePlus className="w-8 h-8" />
        <span className="font-body text-[10px] tracking-luxury uppercase">
          Photo Coming Soon
        </span>
      </div>
      {/* Glass reflection sheen */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%)",
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-32 bg-background overflow-hidden"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-body text-gold text-xs tracking-luxury uppercase mb-4"
      >
        Moments
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="font-heading text-4xl md:text-5xl text-champagne/90 mb-16 text-center"
      >
        A Glimpse of Their Journey
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl w-full">
        {SLOTS.map((slot, i) => (
          <GalleryCard key={i} rotate={slot.rotate} offset={slot.offset} index={i} />
        ))}
      </div>

      <p className="font-body text-champagne/30 text-xs tracking-wide mt-14 text-center max-w-sm">
        Photos will be added closer to the celebration.
      </p>
    </section>
  );
}
