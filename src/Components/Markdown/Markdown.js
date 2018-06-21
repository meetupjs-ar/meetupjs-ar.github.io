import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Markdown extends PureComponent {
  static props = {
    Content: PropTypes.element.isRequired
  };

  render() {
    const { Content } = this.props;

    return (
      <div className="markdown-body">
        <Content />
      </div>
    );
  }
}

export default Markdown;
