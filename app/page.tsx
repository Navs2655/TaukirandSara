import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Details from "@/components/sections/Details";
import Countdown from "@/components/sections/Countdown";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Details />
      <Countdown />
      <Gallery />

      {/* Placeholder anchor — Blessings section arrives next */}
      <section
        id="blessings-placeholder"
        className="min-h-screen flex items-center justify-center text-champagne/40 text-sm tracking-luxury uppercase"
      >
        Blessings section — coming next
      </section>
    </main>
  );
}
