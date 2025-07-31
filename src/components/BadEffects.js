import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading/SectionHeading';
import SectionPara from './section-para/SectionPara';
import { sectionVariants } from '../utils/animationVariants';
import bottomImage from '../images/Winter (Flyer).png';


function BadEffects({ data }) {
  // Classes for container
  const containerClass = `
    mx-auto px-[100px] py-[20px] max-w-[1440px]
    flex flex-col items-center
    lg:px-[20px] md:py-[80px]
    sm:px-[16px] sm:pt-[40px]
  `;

  // دالة عرض العناصر كنصوص
  const renderItems = () => {
  return data.map(({ title, text }, idx) => (
    <div
      key={idx}
      className="max-w-[346px] lg:max-w-[314px] md:max-w-[229px] p-4"
    >
      <h3 className="text-highlight-200 text-center text-lg font-semibold mb-2">
        {title}
      </h3>
      <div className="bg-gradient-to-r from-[#0E4C64] via-[#115A77] to-[#08384F] bg-[length:400%_400%] animate-ripple p-4 rounded-md shadow-lg text-white">
        {
          Array.isArray(text) ? (
            text.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-white mb-3"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-base leading-relaxed text-white">
              {text}
            </p>
          )
        }
      </div>
    </div>
  ));
};

  return (
    <motion.section
      id="bad-effects"
      aria-label="bad effects"
      className="bg-primary"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={containerClass}>
        {/* فيديو ويوصفه */}
        <div className="w-full flex gap-x-[73px] md:flex-col-reverse md:gap-y-[40px] aspect-w-16 aspect-h-9 ]">
          <div className="w-full aspect-w-16 aspect-h-9 max-w-[600px] md:max-w-[400px] mt-[40px]">

            <iframe
              className="w-full h-[400px] rounded-[10px]"
              src="https://www.youtube.com/embed/V1RPi2MYptM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="mt-[56px] md:mt-0 md:flex md:flex-col md:items-center">
            <div className="max-w-[708px] md:max-w-[647px]">
              <SectionHeading align="left" color="secondary">
                <span className="md:block md:text-center text-highlight-100 ">Ice Water </span>
                 <span className="block md:inline">
                    A truly refreshing moment
                  </span>
              </SectionHeading>
            </div>
            <div className="pt-[40px] max-w-[627px] md:max-w-[616px] sm:pt-[32px]">
              <SectionPara align="left" color="secondary" lineHeight="6">
                <span className="md:inline-block md:text-center">
                 -Khamaysa Beverages Company is a Palestinian startup founded with a clear vision: to provide  
                  <span className="text-highlight-200"> high-quality Beverages </span>
                  {''}
                   starting with pure drinking water, under the brand name
                  {' '}
                  <span className="text-highlight-200"> Ice Water. </span>
                  {' '}
                  Our factory is located in Hebron – Tafouh , where we are building a modern infrastructure to produce and bottle water using advanced technologies, with natural spring sources as our primary supply.
                </span>
              </SectionPara>
            </div>
          </div>
        </div>

        {/* عرض العناوين والنصوص بدل الصور */}
        <div className="mt-[80px] w-full flex justify-between md:mt-[40px] sm:flex-col sm:items-center sm:gap-y-[40px]">
          {renderItems()}
        </div>
        {/* صورة في الأسفل */}
        <div className="self-end">
          <motion.img
            src={bottomImage}
            alt="Founded by Vision"
            className="max-w-[70px] rounded-md shadow-md "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.section>
  );
}

BadEffects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default BadEffects;
