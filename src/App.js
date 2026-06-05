import React, { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EnhancedTours from "./components/EnhancedTours";
import AboutPreviewSection from "./components/AboutPreviewSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import CookieConsent from "./components/CookieConsent";
import SEOHead, { seoConfigs } from "./components/SEOHead";
import StructuredDataScript from "./components/StructuredData";
import LanguageRoute from "./components/LanguageRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

// Route-level chunks — loaded only when the user navigates to that route
const EnhancedTourDetails = React.lazy(() =>
  import("./components/EnhancedTourDetails")
);
const Testimonials = React.lazy(() => import("./pages/Testimonials"));
const FAQ          = React.lazy(() => import("./pages/FAQ"));
const PrivacyPolicy   = React.lazy(() => import("./pages/PrivacyPolicy"));
const PrivacyPolicyFr = React.lazy(() => import("./pages/PrivacyPolicyFr"));

// Shown while a lazy route chunk is loading
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
  </div>
);

// Home Page Component — eagerly loaded, above the fold
const HomePage = () => (
  <>
    <SEOHead {...seoConfigs.home} />
    <StructuredDataScript type="website" />
    <StructuredDataScript type="organization" />
    <Hero />
    <EnhancedTours />
    <AboutPreviewSection />
    <Contact />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="App">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:bg-white focus:text-riviera-blue focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:font-semibold"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">
            <ErrorBoundary>
              <Suspense fallback={<PageFallback />}>
                <Routes>
                  {/* Root routes (no language prefix) */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/tour/:slug" element={<EnhancedTourDetails />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/privacy-policy-fr" element={<PrivacyPolicyFr />} />

                  {/* Language-prefixed routes (/en/*, /fr/*) */}
                  <Route path="/:lang" element={<LanguageRoute />}>
                    <Route index element={<HomePage />} />
                    <Route path="tour/:slug" element={<EnhancedTourDetails />} />
                    <Route path="testimonials" element={<Testimonials />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="privacy-policy-fr" element={<PrivacyPolicyFr />} />
                  </Route>
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
          <WhatsAppWidget />
          <CookieConsent />
          <SpeedInsights />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
