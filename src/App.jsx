import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AutoSlideshow from "./components/ImageScrolling";
import Farmers from "./components/Farmers";
import Plants from "./components/Plants";
import NaturalFarming from "./components/NaturalFarming";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <AutoSlideshow/>
                <FeatureSection />
                <Workflow />
                <Pricing />
                <Testimonials />
                <Contact/>
                <Footer />
              </>
            } 
          />
          <Route path="/Products" element={<Pricing />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/natural-farming" element={<NaturalFarming />} />
          
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
