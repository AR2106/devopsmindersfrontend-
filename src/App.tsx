import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./pages/layout/MainLayout";
import CaseStudies from "./pages/case-studies/CaseStudies";
import CaseStudyDetails from "./pages/case-studies/CaseStudyDetails";
import Service from "./pages/service/Service";
import { AboutUs } from "./pages/about-us/AboutUs";
import Contact from "./pages/Contact";
import GetQuotePage from "./pages/quote/Quote";
import AI from "./pages/ai-solutions/AiSolutions";
import AiDevelopment from "./pages/ai-development/AiDevelopment";
import AiAgents from "./pages/ai-agents/AiAgents";
import NotFound from "./pages/NotFound";
// import { PortfolioSection } from "./pages/portfolio/Portfolio";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/ai-development" element={<AiDevelopment />} />
        <Route path="/ai-agents" element={<AiAgents />} />
        {/* <Route path="/portfolio" element={<PortfolioSection />} /> */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />
        <Route path="/quote" element={<GetQuotePage />} />
        <Route path="/ai-solutions" element={<AI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;