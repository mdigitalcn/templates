import { HeroSection } from "@/src/widgets/hero-section";
import { FeatureGrid } from "@/src/widgets/feature-grid";
import { Testimonials } from "@/src/widgets/testimonials";
import { CtaSection } from "@/src/widgets/cta-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <Testimonials />
      <CtaSection />
    </>
  );
}
