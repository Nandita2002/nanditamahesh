import Hero from "@/components/Hero";
import About from "@/components/about";
import FeaturedWork from "@/components/Featuredwork";
import Achievements from "@/components/achievements";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedWork />
      <Achievements />
      {/* <Projects />
      <Writing />
      <Learning />   */}
    </>
  );
}