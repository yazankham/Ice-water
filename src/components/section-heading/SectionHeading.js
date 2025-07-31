import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './SectionHeading.css';

/**
 * The **SectionHeading** component represents the heading of all the sections.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function SectionHeading(props) {
  const { children, align, color } = props;
  const textAlignClass = `sec-text-${align}`;
  const textColorClass = `sec-text-${color}`;

  return (
    <h2 className={classnames("sec-heading", textAlignClass, textColorClass)}>
      {children}
    </h2>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.any.isRequired,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  color: PropTypes.oneOf(['primary', 'secondary']),
};

export default SectionHeading;
