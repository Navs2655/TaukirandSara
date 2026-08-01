import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Placeholder anchor — real Story section arrives in Step 3 */}
      <section
        id="story"
        className="min-h-screen flex items-center justify-center text-champagne/40 text-sm tracking-luxury uppercase"
      >
        Story section — coming in Step 3
      </section>
    </main>
  );
}
