import HeroSection from '../components/HeroSection';
import TechnologySection from '../components/TechnologySection';
import StatsSection from '../components/StatsSection';
import EcosystemSection from '../components/EcosystemSection';
import WebGLExperience from '../components/WebGLExperience';

export default function HomePage() {
  return (
    <>
      <WebGLExperience />
      <HeroSection />
      <TechnologySection />
      <StatsSection />
      <EcosystemSection />
    </>
  );
}
