import Hero from "@/components/sections/Hero";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import AboutSection from "@/components/sections/AboutSection";
import Advantages from "@/components/sections/Advantages";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AboutSection />
      <Advantages />
      <Testimonials />
      <CallToAction />
    </>
  );
}
