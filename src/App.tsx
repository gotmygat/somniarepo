import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LaunchPage from './pages/LaunchPage';
import DocumentationPage from './pages/DocumentationPage';
import ToolsPage from './pages/ToolsPage';
import GrantProgramsPage from './pages/GrantProgramsPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-black min-h-screen">
        <div className="relative z-20">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/launch" element={<LaunchPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/grants" element={<GrantProgramsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
