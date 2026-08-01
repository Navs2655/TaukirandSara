import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Details from "@/components/sections/Details";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Details />

      {/* Placeholder anchor — Countdown section arrives next */}
      <section
        id="countdown-placeholder"
        className="min-h-screen flex items-center justify-center text-champagne/40 text-sm tracking-luxury uppercase"
      >
        Countdown section — coming next
      </section>
    </main>
  );
}
