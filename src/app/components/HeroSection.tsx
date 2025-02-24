import AboutBox from "./AboutBox";

export default function HeroSection() {
  return (
    <section className="bg-black text-white py-40 md:py-60 relative">
      <div className="container mx-auto text-center relative ">
        <h1 className="text-4xl md:text-5xl font-bold mb-20 md:mb-40">
          Ligia Urroz
        </h1>
      </div>
      <AboutBox />
    </section>
  );
}
