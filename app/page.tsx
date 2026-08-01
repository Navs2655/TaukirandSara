export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <p className="font-arabic text-gold text-2xl mb-4">بِسْمِ اللَّهِ</p>
        <h1 className="font-heading text-5xl md:text-7xl text-gradient-gold tracking-wide">
          Taukir <span className="text-champagne/40 mx-4">&amp;</span> Sara
        </h1>
        <p className="mt-6 text-champagne/60 tracking-luxury uppercase text-sm">
          Step 1 scaffold — Hero section arrives in Step 2
        </p>
      </section>
    </main>
  );
}
