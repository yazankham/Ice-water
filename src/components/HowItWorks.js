import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading/SectionHeading';
import Button from './button/Button';
import {
  sectionVariants,
  howItWorksContainerVariants,
  howItWorksItemVariants
} from '../utils/animationVariants';

function HowItWorks({ data, onButtonClick }) {
  const { title, circularEcosystem } = data;
  const { step1, step2, step3, step4 } = circularEcosystem;

  return (
    <motion.section
      id="how-it-works"
      aria-label="how it works"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}>
      <div className="mx-auto px-[80px] pt-[80px] pb-[100px] max-w-[1440px] base:px-[20px] sm:px-[16px] sm:py-[60px]">
        <SectionHeading align="left" color="primary">
          <span className="base:block base:text-center">
            {title}
          </span>
        </SectionHeading>
        <motion.div
          variants={howItWorksContainerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mt-[40px] mb-[80px] grid grid-cols-5 gap-px base:my-[60px] base:grid-cols-1 base:gap-[40px]">
          <motion.div variants={howItWorksItemVariants} className="row-start-1 col-start-3 base:row-start-1 base:col-start-1 base:row-span-1">
            <figure className="flex flex-col items-center justify-center gap-y-[18px]">
              <img className="w-full max-w-[121px]" src={step1.image.url} alt={step1.image.description} />
              <figcaption className="text-primary text-lg leading-7 text-center">
                {step1.stepNo}.<br />{step1.caption}
              </figcaption>
            </figure>
          </motion.div>
          <motion.div variants={howItWorksItemVariants} className="row-start-1 col-start-4 bg-[url('./images/how-it-works-arrow-12.svg')] bg-no-repeat 
            bg-[center_bottom_80px] bg-[length:56px_56px] base:row-start-2 base:col-start-1 base:row-span-1 
            base:bg-[url('./images/how-it-works-down-arrow.svg')] base:bg-center base:bg-contain base:h-[33px]">
          </motion.div>
          <motion.div variants={howItWorksItemVariants} className="row-start-2 col-start-5 base:row-start-3 base:col-start-1 base:row-span-1">
            <figure className="flex flex-col items-center justify-center gap-y-[18px]">
              <img className="w-full max-w-[123.5px]" src={step2.image.url} alt={step2.image.description} />
              <figcaption className="text-primary text-lg leading-7 text-center">
                {step2.stepNo}.<br />{step2.caption}
              </figcaption>
            </figure>
          </motion.div>
          <motion.div variants={howItWorksItemVariants} className="row-start-3 col-start-4 bg-[url('./images/how-it-works-arrow-23.svg')] bg-no-repeat 
            bg-[center_top_80px] bg-[length:56px_56px] base:row-start-4 base:col-start-1 base:row-span-1 
            base:bg-[url('./images/how-it-works-down-arrow.svg')] base:bg-center base:bg-contain base:h-[33px]">
          </motion.div>
          <motion.div variants={howItWorksItemVariants} className="row-start-3 col-start-3 base:row-start-5 base:col-start-1 base:row-span-1">
            <figure className="flex flex-col items-center justify-center gap-y-[18px]">
              <img className="w-full max-w-[123.5px]" src={step3.image.url} alt={step3.image.description} />
              <figcaption className="text-primary text-lg leading-7 text-center">
                03.<br />Pick up used containers from users via app
              </figcaption>
            </figure>
          </motion.div>
          <motion.div variants={howItWorksItemVariants} className="row-start-3 col-start-2 bg-[url('./images/how-it-works-arrow-34.svg')] bg-no-repeat 
            bg-[center_top_80px] bg-[length:56px_56px] base:row-start-6 base:col-start-1 base:row-span-1 
            base:bg-[url('./images/how-it-works-down-arrow.svg')] base:bg-center base:bg-contain base:h-[33px]">
          </motion.div>
          <motion.div variants={howItWorksItemVariants} className="row-start-2 col-start-1 base:row-start-7 base:col-start-1 base:row-span-1">
            <figure className="flex flex-col items-center justify-center gap-y-[18px]">
              <img className="w-full max-w-[114px]" src={step4.image.url} alt={step4.image.description} />
              <figcaption className="text-primary text-lg leading-7 text-center">
                04.<br />Wash containers at commercial facility
              </figcaption>
            </figure>
          </motion.div>
          <motion.div variants={howItWorksItemVariants} className="row-start-1 col-start-2 bg-[url('./images/how-it-works-arrow-41.svg')] bg-no-repeat 
            bg-[center_bottom_80px] bg-[length:56px_56px] base:row-start-8 base:col-start-1 base:row-span-1 
            base:bg-[url('./images/how-it-works-circular-arrow.svg')] base:bg-center base:bg-contain base:h-[85px]">
          </motion.div>
          <motion.div variants={howItWorksItemVariants} className="row-start-2 col-start-3 text-center flex justify-center items-center text-base 
            text-highlight-100 base:row-start-9 base:col-start-1 base:row-span-1">
            Circular ecosystem
          </motion.div>

        </motion.div>
        <div className="flex justify-center">
          <Button isHeader="false" onButtonClick={onButtonClick}>Work with us</Button>
        </div>
      </div>
    </motion.section>
  );
}

HowItWorks.propTypes = {
  data: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default HowItWorks;
