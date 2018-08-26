import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './Markdown.module.css';

const Markdown = ({ Content }) => (
  <div className={styles.markdownBody}>
    <Content />
  </div>
);

Markdown.propTypes = {
  Content: PropTypes.func.isRequired
};

export default Markdown;
