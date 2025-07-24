import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-x-hidden">
       {/* Animated Aurora Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-50">
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-background 
          [background:radial-gradient(125%_125%_at_50%_10%,#050505_40%,#6366F1_100%)]
          md:[background:radial-gradient(125%_125%_at_50%_10%,#050505_40%,#A855F7_100%)]
          opacity-10 md:opacity-20"
        />
      </div>

      <Header />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
