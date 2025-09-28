import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tours from "./components/Tours";
import AboutPreviewSection from "./components/AboutPreviewSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TourDetails from "./pages/TourDetails";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyFr from "./pages/PrivacyPolicyFr";
import WhatsAppWidget from "./components/WhatsAppWidget";
import CookieConsent from "./components/CookieConsent";
import SEOHead, { seoConfigs } from "./components/SEOHead";
import StructuredDataScript from "./components/StructuredData";
import "./App.css";

// Home Page Component
const HomePage = () => (
  <>
    <SEOHead {...seoConfigs.home} />
    <StructuredDataScript type="website" />
    <StructuredDataScript type="organization" />
    <Hero />
    <Tours />
    <AboutPreviewSection />
    <Contact />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy-fr" element={<PrivacyPolicyFr />} />
          </Routes>
          <Footer />
          <WhatsAppWidget />
          <CookieConsent />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
