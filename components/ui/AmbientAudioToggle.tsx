"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientAudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      // Silently ignore if no audio file has been provided yet at the src below.
      audio.play().catch(() => {});
    }
    setPlaying((p) => !p);
  };

  return (
    <>
      {/* Add your own royalty-free / permitted nasheed file at public/audio/nasheed.mp3 */}
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/nasheed.mp3" type="audio/mpeg" />
      </audio>
      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.9 }}
        aria-label={playing ? "Mute background audio" : "Play background audio"}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border border-gold/30 bg-background/70 backdrop-blur-sm flex items-center justify-center text-gold hover:border-gold transition-colors duration-300"
      >
        {playing ? (
          <Volume2 className="w-4 h-4" />
        ) : (
          <VolumeX className="w-4 h-4" />
        )}
      </motion.button>
    </>
  );
}
