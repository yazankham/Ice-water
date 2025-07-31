import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import ImageCompareSlider from './ImageCompareSlider';
import Chat from './chat/Chat';
import {
  sectionVariants,
  textVariants
} from '../utils/animationVariants';

/**
 * The **Hero** component represents the main section of the page where the motto of the company is displayed.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Hero({ data, onButtonClick }) {
  const { mainText, companyName, imagesToCompare, chatMessages } = data;

  // Classes for JSX Elements
  const heroSectionContainerClass = `mx-auto px-[40px] pt-[154px] pb-[40px] max-w-[1440px] flex flex-col 
    lg:px-[20px] sm:px-[16px] sm:pt-[100px]`;
  const heroSectionHeadingClass = `text-xl font-normal leading-9 text-left text-primary 
    md:text-[42px] md:leading-[48px] sm:text-[28px] sm:leading-[34px] sm:text-center`;
  const heroSectionContentClass = `mt-[85px] w-full flex justify-between md:flex-col md:items-center 
    md:mt-[80px] sm:mt-[40px]`;
  const imageSliderContainerClass = `max-w-[626px] w-full object-cover md:max-w-[492px] md:max-h-[289px] 
    sm:max-w-[342px] sm:max-h-[220px]`;


  return (
    <motion.header
      id="hero"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}>
      <div className={heroSectionContainerClass}>
        <div className="max-w-[859px] text-[44px] md:max-w-[100%]">
          <h1 className={heroSectionHeadingClass}>
            {mainText} {' '}
            <motion.span
              variants={textVariants}
              initial="offscreen"
              animate="onscreen"
              className="text-highlight-100 inline-block">{companyName}</motion.span>
          </h1>
        </div>
        <div className={heroSectionContentClass}>
          <div className={imageSliderContainerClass}>
            <ImageCompareSlider imagesToCompare={imagesToCompare} />
            <div className="mt-[13px] w-full flex justify-between text-sm font-normal leading-4 sm:mt-[11px]">
              <p>Now</p>
              <p>With Al-Khamayseh</p>
            </div>
          </div>
          <div className="max-w-[491px] w-full flex flex-col justify-end md:max-w-[492px] md:mt-[60px]">
            <div className="px-[50px] flex flex-col gap-[16px] md:min-h-[422px] md:justify-end">
              <Chat chatMessages={chatMessages} onButtonClick={onButtonClick} />
              <div className="w-[38px] h-[38px] bg-[url('./images/chat-admin.svg')]
              bg-no-repeat bg-center bg-contain self-end relative -right-[40px] bottom-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Hero;
