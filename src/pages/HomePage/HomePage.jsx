import HeroSection from "./HeroSection";
import Features from "./Features";
import PromoBanner from "./PromoBanner";

export default function HomePage() {
  return (
    <section className="mx-25 my-40 text-xl font-main-2 flex flex-col gap-50 text-gray-700 select-none">
      <HeroSection />
      <Features />
      <PromoBanner />
    </section>
  );
}
