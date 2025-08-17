import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import bgImage from '../images/waterfalls-falls.gif';
import accLogo from '../images/لوجو شركة الخمايسة 2.png';

function PageLoad({ data }) {
  const { companyName } = data;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/*  الخلفية المتحركة منفصلة */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 animate-pulseBackground"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: 'contrast(115%) brightness(110%) saturate(120%) drop-shadow(0 0 6px #66ccff)',
          opacity: 0.35
        }}
      />

      {/*  الواجهة الرئيسية فوق الخلفية */}
      <motion.div
        className="relative z-10 w-full h-full p-5 flex flex-col justify-center items-center"
      >
        {/* موجات */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.7 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-48 h-48 border-4 border-cyan-300 rounded-full"
        />

        <motion.div
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: [0.8, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 2.5, ease: 'easeOut', repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/3 left-2/5 w-12 h-12 bg-cyan-400 rounded-full opacity-30"
        />

        {/* شعار الشركة */}
        <motion.img
          src={accLogo}
          alt="Al-khamayesh logo"
          className="max-w-[152px] min-h-[112px] object-contain mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        />

        {/* اسم الشركة */}
        <motion.h1
          className="text-highlight-100 md:text-4xl sm:text-2xl text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {companyName}
        </motion.h1>
      </motion.div>
    </div>
  );
}

PageLoad.propTypes = {
  data: PropTypes.shape({
    companyName: PropTypes.string.isRequired
  }).isRequired
};

export default PageLoad;
