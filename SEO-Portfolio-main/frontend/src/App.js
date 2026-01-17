import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <CaseStudies />
      <Testimonials />
      <Certifications />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
