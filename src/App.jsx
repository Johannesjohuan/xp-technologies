import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import TrustedBy from "./sections/TrustedBy/TrustedBy";
import Challenges from "./sections/Challenges/Challenges";
import ValueBar from "./sections/ValueBar/ValueBar";
import Industries from "./sections/Industries/Industries";
import Process from "./sections/Process/Process";
import Footer from "./sections/Footer/Footer";

import Solutions from "./pages/Solutions/Solutions";
import EnterpriseERP from "./pages/Solutions/EnterpriseERP/EnterpriseERP";
import Entersp from "./pages/Solutions/EnterpriseERP/Entersp";
import BusinessProcessAutomation from "./pages/Solutions/BusinessProcessAutomation/BusinessProcessAutomation";
import LegacySystemModernization from "./pages/Solutions/LegacySystemModernization/LegacySystemModernization";
import TechnicalSupportMaintenance from "./pages/Solutions/TechnicalSupportMaintenance/TechnicalSupportMaintenance";
import ERPSecurityInfrastructure from "./Pages/Solutions/ERPSecurityInfastructure/ERPSecurityInfastructure";
import IndustriesPage from "./pages/Industries/Industries";
import Portfolio from "./pages/Portfolio/Portfolio";
import VoodiProject from "./pages/Portfolio/VoodiProject/VoodiProject";
import StyleWrightProject from "./pages/Portfolio/StyleWrightProject/StyleWrightProject";
import About from "./pages/About/About";
import Resources from "./Pages/Resources/Resources";
import Consultation from "./pages/Consultation/Consultation";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Challenges />
      <ValueBar />
      <Industries />

      <section className="home-systems-preview">
        <div className="container">
          <div className="home-systems-heading">
            <span>BUILT FOR REAL BUSINESSES</span>

            <h2>
              Different Businesses. Different Systems.
            </h2>

            <p>
              Explore business management systems designed
              around the way different businesses operate.
            </p>
          </div>

          <Entersp />
        </div>
      </section>

      <Process />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/solutions"
        element={<Solutions />}
      />

      <Route
        path="/solutions/enterprise-erp"
        element={<EnterpriseERP />}
      />

      <Route
        path="/solutions/business-process-automation"
        element={<BusinessProcessAutomation />}
      />

      <Route
        path="/solutions/system-modernisation"
        element={<LegacySystemModernization />}
      />

      <Route
        path="/solutions/technical-support"
        element={<TechnicalSupportMaintenance />}
      />

      <Route
        path="/solutions/security-infrastructure"
        element={<ERPSecurityInfrastructure />}
      />

      <Route
        path="/industries"
        element={<IndustriesPage />}
      />

      <Route
        path="/portfolio"
        element={<Portfolio />}
      />

      <Route
        path="/portfolio/voodi"
        element={<VoodiProject />}
      />

      <Route
        path="/portfolio/StyleWrightProject"
        element={<StyleWrightProject />}
      />
      <Route
  path="/About"
  element={<About />}
/>
<Route
  path="/resources"
  element={<Resources />}
/>
<Route path="/consultation" element={<Consultation />} 

/>
    </Routes>
  );
}

export default App;