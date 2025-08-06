import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading/SectionHeading";
import SectionPara from "./section-para/SectionPara";
import Carousel from "./carousel/Carousel";
import {
  sectionVariants,
  sustainabilityIconVariants,
} from "../utils/animationVariants";
import logisticsSupportImage from "../images/backend-logistics-support.svg";
import saveCostImage from "../images/save-costs.svg";
import saveStorageImage from "../images/save-storage.png";

/**
 * The **SustainabilityDelivered** component discusses replaces how the company replaces single-use packaging with reusable stainless steel containers.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function SustainabilityDelivered({ data }) {
  // Classes for JSX Elements
  const sustainabilityDelSectionContainerClass = `mx-auto py-[120px] px-[50px] max-w-[1440px] lg:px-[30px] sm:py-[80px] sm:px-[16px] xs:pt-[40px]`;
  const imgContainerClass = `w-full max-w-[152.73px]`;
  const imgClass = `w-full object-contain object-center`;
  const imgSubtitleClass = `mt-[30px] text-lg font-normal leading-7 text-primary text-center`;

  return (
    <motion.section
      id="sustainability-delivered"
      aria-label="sustainability delivered"
      className="bg-secondary-200"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={sustainabilityDelSectionContainerClass}>
        <div className="flex flex-col items-center xs:hidden">
          <SectionHeading align="center" color="primary">
            Photos from our premises
          </SectionHeading>
          <div className="my-[40px] w-full max-w-[598px] md:mb-[60px] sm:my-[32px]">
            <SectionPara align="center" color="primary" lineHeight="6">
              <span className="text-highlight-100">
                Al-Khamayseh Beverage Company
              </span>{" "}
              replaces single-use packaging with reusable stainless steel
              containers
            </SectionPara>
          </div>
        </div>
        <Carousel slides={data} />
        <div className="mt-[100px] px-[100px] lg:px-[40px] md:mt-[150px] sm:px-[10px]">
          <div className="flex md:justify-center">
            <div className="flex flex-col items-center md:max-w-[380px]">
              <motion.div
                className={imgContainerClass}
                initial="hidden"
                whileInView="visible"
                variants={sustainabilityIconVariants}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={logisticsSupportImage}
                  alt="logistics support"
                  className={imgClass}
                />
              </motion.div>
              <p className={imgSubtitleClass}>Backend logistics support</p>
            </div>
          </div>
          <div className="flex justify-end lg:pt-[40px] md:justify-center md:pt-[80px] sm:pt-[70px]">
            <div className="flex flex-col items-center max-w-[380px]">
              <motion.div
                className={imgContainerClass}
                initial="hidden"
                whileInView="visible"
                variants={sustainabilityIconVariants}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src={saveCostImage} alt="save cost" className={imgClass} />
              </motion.div>
              <p className={imgSubtitleClass}>
                Save at least 50% on supply cost and time on inventory tracking
                / re-orders
              </p>
            </div>
          </div>
          <div className="flex lg:pt-[40px] md:justify-center md:pt-[80px] sm:pt-[70px] ">
            <div className="ml-[150px] flex flex-col items-center max-w-[543px] xl:ml-[20px] lg:ml-[0px] md:max-w-[380px]">
              <motion.div
                className={imgContainerClass}
                initial="hidden"
                whileInView="visible"
                variants={sustainabilityIconVariants}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={saveStorageImage}
                  alt="save storage"
                  className={imgClass}
                />
              </motion.div>
              <p className={imgSubtitleClass}>
                Save storage space while removing tons of waste from our oceans
                and landfills
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

SustainabilityDelivered.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SustainabilityDelivered;