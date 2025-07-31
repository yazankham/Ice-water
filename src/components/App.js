import React, { lazy, Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import PageLoad from './PageLoad';
import Loader from './Loader';
import NavBar from './NavBar';
import Hero from './Hero';
import BadEffects from './BadEffects';

// Import data to pass on to the components
import data from '../constants/data';

// Code-split on a component level using dynamic imports
const SustainabilityDelivered = lazy(() => import('./SustainabilityDelivered'));;
const HowItWorks = lazy(() => import('./HowItWorks'));
const Impact = lazy(() => import('./Impact'));
const Competition = lazy(() => import('./competition/Competition'));
const Sustainability = lazy(() => import('./Sustainability'));
const Pricing = lazy(() => import('./Pricing'));
const AwesomeTeam = lazy(() => import('./AwesomeTeam'));
// const AwesomePartners = lazy(() => import('./AwesomePartners'));
const Footer = lazy(() => import('./Footer'));
const PopupWithForm = lazy(() => import('./form-popup/PopupWithForm'));

const renderLoader = () => <Loader />;

/**
 * The main React **App** component.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 * @author [Ekaterina Cratcha](https://github.com/cratcha)
 * @author [Shraddha](https://github.com/5hraddha)
 */
function App() {
  const [isPageLoading, setIsPageLoading] = React.useState(true);
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(true);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [isFormSubmitted, setFormSubmitted] = React.useState(false);

  const {
    pageLoad,
    hero,
    plasticsBadEffects,
    sustainabilityDeliveredSlides,
    howItWorks,
    impacts,
    competition,
    awesomeTeam,
    footer,
  } = data;

  const closePopup = () => {
    setPopupOpen(false);
    setFormSubmitted(false);
  };

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  // ********************************************************************************************* //
  //                        			Handle initial page load						                             //
  // ********************************************************************************************* //

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const changeScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeScreenWidth);
    return () => {
      window.removeEventListener('resize', changeScreenWidth);
    }
  }, []);

  React.useEffect(() => {
    if (screenWidth <= 930) {
      setIsNavbarOpen(false);
    } else {
      setIsNavbarOpen(true);
    }
  }, [screenWidth]);

  // ********************************************************************************************* //
  //                        Handle mouse click or Esc key down event                               //
  // ********************************************************************************************* //

  React.useEffect(() => {
    const closeByClick = e => {
      if (e.target.classList.contains('form-open')) {
        closePopup();
      }
      if (screenWidth <= 930 && isNavbarOpen) {
        setIsNavbarOpen(false);
      }
    }
    const closeByEsc = (e) => {
      if (e.keyCode === 27) {
        closePopup();
      }
    };

    document.addEventListener('click', closeByClick);
    document.addEventListener('keydown', closeByEsc);

    return () => {
      document.removeEventListener('click', closeByClick);
      document.removeEventListener('keydown', closeByEsc);
    };
  }, [isPopupOpen, isNavbarOpen, screenWidth]);


  return (
    <HelmetProvider>
      <div className='font-serif text-base font-normal leading-5'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Awesome Container Company</title>
          <meta name="description" content="Help our environment by eliminating single-use plastics from your delivery with Awesome Container Company" />
          <meta name="keywords" content="acc, awesome container company, container, singapore, save environment" />
          <meta name="author" content="Alec Drosu, Ekaterina Cratcha, Shraddha" />
        </Helmet>
        <AnimatePresence>
          {(isPageLoading)
            ? <PageLoad key="loading" data={pageLoad} />
            :
            <>
              <NavBar
                onButtonClick={handleButtonClick}
                isNavbarOpen={isNavbarOpen}
                setIsNavbarOpen={setIsNavbarOpen}
                screenWidth={screenWidth} />
              <Hero data={hero} onButtonClick={handleButtonClick} />
              <main>
                <BadEffects data={plasticsBadEffects} />
                <Suspense fallback={renderLoader()}>
                  <SustainabilityDelivered data={sustainabilityDeliveredSlides} />
                  <HowItWorks data={howItWorks} onButtonClick={handleButtonClick} />
                  <Impact data={impacts} />
                  <Competition data={competition} />
                  <Sustainability />
                  <Pricing onButtonClick={handleButtonClick} />
                  <AwesomeTeam data={awesomeTeam} />
                  {/* <AwesomePartners data={awesomePartners} /> */}
                </Suspense>
              </main>
              <Suspense fallback={renderLoader()}>
                <PopupWithForm
                  onClose={closePopup}
                  isOpen={isPopupOpen}
                  isFormSubmitted={isFormSubmitted}
                  setFormSubmitted={setFormSubmitted} />
                <Footer data={footer} />
              </Suspense>
            </>}
        </AnimatePresence>
      </div>
    </HelmetProvider>
  );
}

export default App;
