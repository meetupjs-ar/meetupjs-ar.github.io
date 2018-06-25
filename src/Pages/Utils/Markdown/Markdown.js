import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import * as styles from './Markdown.module.css';

class Markdown extends PureComponent {
  static props = {
    Content: PropTypes.element.isRequired
  };

  render() {
    const { Content } = this.props;

    return (
      <div className={styles.markdownBody}>
        <Content />
      </div>
    );
  }
}

export default Markdown;
