import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tours from "./components/Tours";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TourDetails from "./pages/TourDetails";
import WhatsAppWidget from "./components/WhatsAppWidget";
import SEOHead, { seoConfigs } from "./components/SEOHead";
import "./App.css";

// Home Page Component
const HomePage = () => (
  <>
    <SEOHead {...seoConfigs.home} />
    <Hero />
    <Tours />
    <About />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tour/:id" element={<TourDetails />} />
        </Routes>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
