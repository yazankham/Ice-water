import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading/SectionHeading';
import SectionPara from './section-para/SectionPara';
import Button from './button/Button';
import {
  sectionVariants,
  pricingCalloutVariants
} from '../utils/animationVariants';
import pricingContainer from '../images/pricing-section-container.svg';

/**
 * The **Pricing** component represents the section where the company pricing details have been discussed.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Pricing({ onButtonClick }) {

  // Classes for JSX Elements
  const pricingSectionContainerClass = `mx-auto px-[82px] max-w-[1440px] flex flex-col items-center 
    lg:px-[40px] md:px-[20px] sm:px-[16px]`;
  const pricingCalloutClass = `ml-[31px] px-[42px] py-[37px] w-full min-h-[158px] 
    bg-[url('./images/pricing-section-callout.svg')] bg-no-repeat bg-center bg-contain 
    flex justify-center items-center md:ml-[0px] md:bg-[url('./images/pricing-section-callout-tablet.svg')] 
    md:min-h-[350px] sm:min-h-[192px]`;
  const pricingCalloutTextClass = `text-[20px] font-normal leading-[23.7px] text-center 
    md:max-w-[344px] sm:text-base sm:leading-[21.33px] sm:max-w-[244px]`;

  return (
    <motion.section
      id="pricing"
      aria-label="pricing"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}>
      <div className={pricingSectionContainerClass}>
        <div className="mx-auto w-full max-w-[800px]">
          <SectionHeading align="center" color="primary">
            Get in touch with us to calculate prices for your business
          </SectionHeading>
        </div>
        <div className="my-[92px] w-full max-w-[738px] flex md:flex-col-reverse md:mt-[40px] md:mb-[60px]">
          <div className="w-full max-w-[195px] pt-[100px] md:pt-[26px] sm:max-w-[130px]">
            <img src={pricingContainer} className="object-cover object-center" alt="pricing container" />
          </div>
          <motion.div
            variants={pricingCalloutVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className={pricingCalloutClass}>
            <p className={pricingCalloutTextClass}>
              We calculate our prices according to the amount of containers and deliveries made by your business monthly.
            </p>
          </motion.div>
        </div>
        <Button isHeader="false" onButtonClick={onButtonClick}>Work with us</Button>
        <div className="mt-[32px] max-w-[618px]">
          <SectionPara align="center" color="primary" lineHeight="5">
            Leave your contacts and request, and our manager will reach out to you to establish our further partnership!
          </SectionPara>
        </div>
      </div>
    </motion.section>
  );
}

Pricing.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Pricing;
