import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import SolutionSection from "./components/SolutionSection";
import EcosystemSection from "./components/EcosystemSection";
import MaintenanceSection from "./components/MaintenanceSection";
import TestimonialSection from "./components/TestimonialSection";
import EnergyConsultationCTASection from "./components/EnergyConsultationCTASection";

function App() {
  return (
    <>
      <HeroSection />
      <main>
        <SolutionSection />
        <MaintenanceSection />
        <EcosystemSection />
        <ServiceSection />
        <EnergyConsultationCTASection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
