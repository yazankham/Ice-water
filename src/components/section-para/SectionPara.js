import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './SectionPara.css';

/**
 * The **SectionPara** component represents the paragraphs of all the sections.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function SectionPara(props) {
  const { children, align, color, lineHeight } = props;
  const textAlignClass = `sec-text-${align}`;
  const textColorClass = `sec-text-${color}`;
  const lineHeightClass = `sec-text-leading-${lineHeight}`;

  return (
    <p className={classnames("sec-para", textAlignClass, textColorClass, lineHeightClass)}>
      {children}
    </p>
  );
}

SectionPara.propTypes = {
  children: PropTypes.any.isRequired,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  lineHeight: PropTypes.oneOf(['5', '6']),
};

export default SectionPara;
