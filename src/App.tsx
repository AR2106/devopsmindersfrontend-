
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/layout/MainLayout";
import CaseStudies from "./pages/case-studies/CaseStudies";
import CaseStudyDetails from "./pages/case-studies/CaseStudyDetails";
import Service from "./pages/service/Service";
import { AboutUs } from "./pages/about-us/AboutUs";
import Contact from "./pages/Contact";
import GetQuotePage from "./pages/quote/Quote";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/cases-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/quote" element={<GetQuotePage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
