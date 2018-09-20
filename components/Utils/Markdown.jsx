import PropTypes from 'prop-types';
import React from 'react';

const Markdown = ({ Content, bigFont }) => (
  <>
    <div className={`${bigFont ? 'big-font' : ''} markdown-body`}>
      <Content />
    </div>
  </>
);

Markdown.propTypes = {
  bigFont: PropTypes.bool,
  Content: PropTypes.func.isRequired
};

Markdown.defaultProps = {
  bigFont: false
};

export default Markdown;
