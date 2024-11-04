import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItHelps from "./components/HowItHelps/HowItHelps";
import Uses from "./components/Uses/Uses";
import Trust from "./components/Trust/Trust";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/contact";
import MentionsLegales from "./pages/legal-notice";
import ProtectionDonnees from "./pages/data-protection";
import ConditionsGenerales from "./pages/general-conditions";

const HomePage = () => (
  <>
    <Hero />
    <HowItHelps />
    <Uses />
    <Trust />
  </>
);

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/protection-donnees" element={<ProtectionDonnees />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;