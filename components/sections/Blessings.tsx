"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// Eight-pointed star (rub el hizb) — a traditional Islamic geometric motif,
// used sparingly here as a single ornament rather than a repeated pattern.
function GeometricStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="none" stroke="#C8A24F" strokeWidth="1">
        <polygon points="50,5 61,39 97,39 68,60 79,95 50,74 21,95 32,60 3,39 39,39" />
        <polygon
          points="50,5 61,39 97,39 68,60 79,95 50,74 21,95 32,60 3,39 39,39"
          transform="rotate(45 50 50)"
        />
      </g>
    </svg>
  );
}

export default function Blessings() {
  return (
    <section
      id="blessings"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(31,92,74,0.12) 0%, rgba(9,9,9,0) 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
        whileInView={{ opacity: 0.5, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
        className="relative z-10 w-16 h-16 md:w-20 md:h-20 mb-10"
      >
        <GeometricStar className="w-full h-full" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
        lang="ar"
        dir="rtl"
        className="relative z-10 font-arabic text-champagne text-2xl md:text-4xl leading-loose text-center max-w-3xl mb-10"
      >
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
        وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        className="relative z-10 font-heading text-xl md:text-2xl text-champagne/70 italic text-center max-w-xl leading-relaxed mb-6"
      >
        "And of His signs is that He created for you from yourselves mates
        that you may find tranquillity in them; and He placed between you
        affection and mercy."
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="relative z-10 font-body text-gold text-xs tracking-luxury uppercase"
      >
        Surah Ar-Rum, 30:21 — Sahih International
      </motion.p>
    </section>
  );
}
