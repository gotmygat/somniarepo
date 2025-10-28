import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import InteractiveJourney from './components/InteractiveJourney';
import TechnologySection from './components/TechnologySection';
import EcosystemSection from './components/EcosystemSection';
import StatsSection from './components/StatsSection';
import WebGLExperience from './components/WebGLExperience';

function App() {
  return (
    <div className="relative bg-black min-h-screen">
      <WebGLExperience />
      <div className="relative z-20">
        <Navigation />
        <HeroSection />
        <InteractiveJourney />
        <TechnologySection />
        <EcosystemSection />
        <StatsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
