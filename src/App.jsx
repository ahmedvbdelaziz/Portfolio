import React, { useState, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
const Intro = React.lazy(() => import('./components/Intro'));
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Hero = React.lazy(() => import('./components/Hero'));
const AboutSection = React.lazy(() => import('./components/AboutSection'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Suspense >
      <AnimatePresence>
        {isLoading && <Intro onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <AboutSection />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </Suspense>
  );
}

export default App;
