import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children }) => (
  <p
    style={{
      fontStyle: 'italic',
      margin: '2vh 0 0'
    }}
  >
    {children}
  </p>
);

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
};

export default Paragraph;
