import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { tableBulletVariants } from '../../utils/animationVariants';
import './CompetitionTable.css';
/**
 * The **CompetitionTable** component lays out the comparison between the company and its competitors.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function CompetitionTable({ table }) {
  const renderText = (text, color = 'primary') => {
    const textClass = `${(color === 'highlight') ? `text-highlight-100` : ``}`;
    return (
      <p className={textClass}>{text}</p>
    );
  }

  const renderBullet = (color = 'primary') => {
    const bulletClass = `${(color === 'highlight') ? `bullet-highlight` : `bullet`}`;
    return (
      <motion.div
        className={bulletClass}
        initial="offscreen"
        whileInView="onscreen"
        variants={tableBulletVariants}
        viewport={{ once: true }} />
    );
  }

  const renderCell = (cell, colNumber) => {
    if (cell === false || cell === '') {
      return ``;
    }
    if (cell === true) {
      return (colNumber === 1) ? renderBullet('highlight') : renderBullet();
    }

    return (colNumber === 1) ? renderText(cell, 'highlight') : renderText(cell);
  }

  const renderRow = (row, rowNumber) => {
    return (
      row.map((cell, index) => {
        let cellClass;
        if (rowNumber === 0) {
          cellClass = `table-top-header ${(index === 0) && `rounded-tl-[3px]`} ${(index === row.length - 1) && `rounded-tr-[3px]`}`;
        } else if (rowNumber === table.length - 1) {
          cellClass = `table-cell ${(index === 0) && `table-left-header rounded-bl-[3px]`} ${(index === row.length - 1) && `rounded-br-[3px]`}`;
        } else {
          cellClass = `${(index === 0) ? `table-left-header` : `table-cell`}`;
        }
        return (
          <div key={index} className={cellClass}>
            {renderCell(cell, index)}
          </div>
        );
      }
      ));
  }

  const renderTable = () => {
    return table.map((row, index) => renderRow(row, index));
  }

  return (
    <article className="table" aria-label="competition table">
      {renderTable()}
    </article>
  );
}

CompetitionTable.propTypes = {
  table: PropTypes.array.isRequired,
};

export default CompetitionTable;
