import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Details from "@/components/sections/Details";
import Countdown from "@/components/sections/Countdown";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Details />
      <Countdown />

      {/* Placeholder anchor — Gallery section arrives next */}
      <section
        id="gallery-placeholder"
        className="min-h-screen flex items-center justify-center text-champagne/40 text-sm tracking-luxury uppercase"
      >
        Gallery section — coming next
      </section>
    </main>
  );
}
