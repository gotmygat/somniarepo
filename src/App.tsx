import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TechnologySection from './components/TechnologySection';
import StatsSection from './components/StatsSection';
import EcosystemSection from './components/EcosystemSection';
import Footer from './components/Footer';

const WebGLExperience = lazy(() => import('./components/WebGLExperience'));

function App() {
  return (
    <div className="relative bg-black min-h-screen">
      <Suspense fallback={<div className="fixed inset-0 bg-[#0a0a0f]" />}>
        <WebGLExperience />
      </Suspense>

      <div className="relative z-20">
        <Navigation />
        <HeroSection />
        <TechnologySection />
        <StatsSection />
        <EcosystemSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
