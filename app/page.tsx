import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />

      {/* Placeholder anchor — Timeline section arrives in Step 4 */}
      <section
        id="timeline"
        className="min-h-screen flex items-center justify-center text-champagne/40 text-sm tracking-luxury uppercase"
      >
        Timeline section — coming in Step 4
      </section>
    </main>
  );
}
