import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import classnames from "classnames";
import SectionHeading from "./section-heading/SectionHeading";
import { sectionVariants } from "../utils/animationVariants";

/**
 * The **Impact** component highlights the impacts for businesses and users.
 *
 * @version 1.0.0
 * @author [Ekaterina Cratcha](https://github.com/cratcha)
 */
function Impact({ data }) {
  const { title, cards } = data;

  const renderCards = () => {
    return cards.map((cardData, index) => {
      const imgUrlClass =
        index === 0
          ? `before:bg-[url('./images/rectangles-impact.svg')]`
          : `before:bg-[url('./images/ovals-impact.svg')]`;
      const impactCardClass = `relative py-[40px] px-[15px] min-h-[433px] w-full bg-secondary-100 rounded-[3px] shadow 
    before:absolute before:top-[-22%] before:left-[30%] before:w-full before:max-w-[40%] before:min-h-[143px] 
    before:-z-[1] before:bg-contain before:bg-center before:bg-no-repeat sm:before:top-[-20%] xs:before:top-[-18%]`;

      return (
        <article
          key={cardData.id}
          className={classnames(impactCardClass, imgUrlClass)}
        >
          {/* Card Header */}
          <h2 className="mb-[20px] text-lg leading-7 text-highlight-100 text-center md:mb-[50px]">
            {cardData.cardHeader}
          </h2>
          {/* Card Content */}
          <div className="flex flex-col gap-[20px]">
            {cardData.cardContent.map((arrItem, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-[20px] w-[10px] h-[10px] bg-[url('./images/bullet-points.svg')] bg-no-repeat bg-center bg-cover"></div>
                <p className="text-center">{arrItem}</p>
              </div>
            ))}
          </div>
        </article>
      );
    });
  };
  return (
    <motion.section
      id="impact"
      aria-label="impact"
      className="bg-secondary-200"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" mx-auto py-[120px] px-[34px] max-w-[1440px] flex flex-col items-center 
        lg:px-[20px] base:pt-[60px] base:pb-[0px] sm:px-[16px]">
        <SectionHeading align="center" color="primary">
          {title}
        </SectionHeading>

        <div className="w-full mt-[60px] grid grid-cols-2 gap-[40px] base:mt-[120px] base:grid-cols-1 base:gap-[117px] z-10">
          {renderCards()}
        </div>
      </div>
    </motion.section>
  );
}

Impact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Impact;
