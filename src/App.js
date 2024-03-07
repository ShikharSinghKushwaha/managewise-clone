
import './App.css';
import Navbar from './Components/Navbar';
import { useState } from "react"
import Landing from './Components/Landing';   
import Features from './Components/Features';
import Explore from './Components/Explore';
import Faq from './Components/Faq';
import FaqData from './Components/FaqData';
import Pricing from './Components/Pricing';
import Testimonial from './Components/Testimonial';
import TestimonialData from './Components/TestionialData';
import Cta from './Components/Cta';
import Footer from './Components/Footer';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
 

  return (
    
    <div className="App">
      <header>
        {/* <FontAwesome icon={faBars} /> */}
        <Navbar />
        <Landing />
        <Features />
        <Explore />
        <FaqData />
        <Pricing />
        <TestimonialData />
        <Cta />
        <Footer />
      </header>
    </div>
  );
}

export default App;
