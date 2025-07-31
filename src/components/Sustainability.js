
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading/SectionHeading';
import SectionPara from './section-para/SectionPara';
import {
  sectionVariants,
  esgCareIconVariants
} from '../utils/animationVariants';
import esgCareImg from '../images/esg-care.svg';

/**
 * The **Sustainability** component highlights the company to be an ESG company.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Sustainability() {

  // Classes for JSX Elements
  const sustainabilitySectionContainerClass = `mx-auto px-[100px] max-w-[1440px] pt-[64.54px] pb-[180px] 
    flex lg:px-[40px] lg:flex-col-reverse md:px-[20px] md:pb-[120px] sm:px-[16px] sm:pt-[50px]`;

  return (
    <motion.section
      id="sustainability"
      aria-label="sustainability"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}>
      <div className={sustainabilitySectionContainerClass}>
        <div className="max-w-[780px]">
          <div className="mt-[187.46px] lg:mt-[-20px] md:mt-[60px]">
            <SectionHeading align="left" color="primary">
              We are an ESG company:<br /> we care for social and environmental sustainability
            </SectionHeading>
          </div>
          <div className="mt-[40px]">
            <SectionPara align="left" color="primary" lineHeight="5">
              In 2020 Singapore’s government took on <span className="text-highlight-100">the Green Plan</span>:
              a whole-of-nation movement to advance Singapore’s national agenda on sustainable development.
              Our company is a part of its solution to cultivating a Sustainable Living — 1 of the 5 key programmes
              of SG Green Plan.
            </SectionPara>
          </div>
        </div>
        <div className="max-w-[305.84px] lg:self-end md:self-center md:max-w-[173.62px]">
          <motion.img
            variants={esgCareIconVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            src={esgCareImg}
            alt="a sapling coming out of a container"
            className="object-contain" />
        </div>
      </div>
    </motion.section>
  );
}

export default Sustainability;
