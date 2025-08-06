import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import BadEffects from './components/BadEffects';
import SustainabilityDelivered from './components/SustainabilityDelivered';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import ReviewSection from './components/reviews/review';
import PageLoad from './components/PageLoad';
import ImageCompareSlider from './components/ImageCompareSlider';
import Chat from './components/chat/Chat';

import data from './constants/data';
import './index.css';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
  const [showPageLoad, setShowPageLoad] = React.useState(true);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPageLoad(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleButtonClick = () => {
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {showPageLoad ? (
        <PageLoad data={data.pageLoad} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavBar
            onButtonClick={handleButtonClick}
            isNavbarOpen={isNavbarOpen}
            setIsNavbarOpen={setIsNavbarOpen}
            screenWidth={screenWidth}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero data={data.hero} onButtonClick={handleButtonClick} />
                  <BadEffects data={data.plasticsBadEffects} />
                  <SustainabilityDelivered data={data.sustainabilityDeliveredSlides} />
                  <HowItWorks data={data.howItWorks} onButtonClick={handleButtonClick} />
                  <Pricing data={data.impacts} />
                  <ReviewSection />
                  <Footer data={data.footer} />
                </>
              }
            />
            <Route
              path="/image-compare"
              element={
                <ImageCompareSlider
                  imagesToCompare={data.hero.imagesToCompare}
                />
              }
            />
            <Route
              path="/chat"
              element={<Chat chatMessages={data.hero.chatMessages} />}
            />
          </Routes>
        </motion.div>
      )}
    </div>
  );
}

export default App;