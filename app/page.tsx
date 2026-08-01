import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Details from "@/components/sections/Details";
import Countdown from "@/components/sections/Countdown";
import Blessings from "@/components/sections/Blessings";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <SectionDivider />
      <Story />
      <SectionDivider />
      <Details />
      <SectionDivider />
      <Countdown />
      <SectionDivider />
      <Blessings />

      {/* Placeholder anchor — RSVP section arrives next */}
      <section
        id="rsvp-placeholder"
        className="min-h-screen flex items-center justify-center text-champagne/40 text-sm tracking-luxury uppercase"
      >
        RSVP section — coming next
      </section>
    </main>
  );
}
