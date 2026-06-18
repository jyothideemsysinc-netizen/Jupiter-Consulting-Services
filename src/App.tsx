import { Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { VisionGoalsPage } from './pages/VisionGoalsPage';
import { MissionPage } from './pages/MissionPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { FeedbackPage } from './pages/FeedbackPage';
import { ServicesPage } from './pages/ServicesPage';
import { DifferentiatorsPage } from './pages/DifferentiatorsPage';
import { CrossPlatformTrainingPage } from './pages/CrossPlatformTrainingPage';
import { CompensationBenefitsPage } from './pages/CompensationBenefitsPage';
import { JupiterFuturePage } from './pages/JupiterFuturePage';
import { EmployeeReferralPage } from './pages/EmployeeReferralPage';
import { HotRequirementsPage } from './pages/HotRequirementsPage';
import { JobSecurityPage } from './pages/JobSecurityPage';
import { DownloadsPage } from './pages/DownloadsPage';

export default function App() {
  return (
    <div className="font-sans min-h-screen">
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/mission" element={<VisionGoalsPage />} />
        <Route path="/team" element={<MissionPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/differentiators" element={<DifferentiatorsPage />} />
        <Route path="/careers/cross-platform-training" element={<CrossPlatformTrainingPage />} />
        <Route path="/careers/compensation" element={<CompensationBenefitsPage />} />
        <Route path="/careers/future" element={<JupiterFuturePage />} />
        <Route path="/careers/referral" element={<EmployeeReferralPage />} />
        <Route path="/careers/hot-requirements" element={<HotRequirementsPage />} />
        <Route path="/careers/security" element={<JobSecurityPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
