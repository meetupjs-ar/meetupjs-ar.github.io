import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './Markdown.css';

const Markdown = ({ Content, bigFont }) => (
  <>
    <div className={classnames([bigFont ? 'lg:text-xl' : '', 'markdown-body'])}>
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
