import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SectionHeading from '../section-heading/SectionHeading';
import CompetitionTable from '../competition-table/CompetitionTable';
import { sectionVariants } from '../../utils/animationVariants';
import './Competition.css';


function Competition({ data }) {
  const { title, table } = data;

  return (
    <motion.section
      id="competition"
      className=" bg-secondary-200"
      aria-label="competition"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto px-[100px] py-[120px] max-w-[1440px] flex flex-col items-center 
        lg:px-[20px] sm:pt-[80px] sm:pb-[100px] sm:px-[16px]">
        <SectionHeading align="center" color="primary">{title}</SectionHeading>
        <div className="competition competition-wrapper">
          <CompetitionTable table={table} />
        </div>
      </div>
    </motion.section>
  );
}

Competition.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Competition;
