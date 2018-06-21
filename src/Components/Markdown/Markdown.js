import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import A from './Tags/A';
import H1 from './Tags/H1';
import H2 from './Tags/H2';

class Markdown extends PureComponent {
  static props = {
    Content: PropTypes.element.isRequired
  };

  render() {
    const { Content } = this.props;

    return (
      <div className="black-alternative lh-copy">
        <Content
          components={{
            a: A,
            h1: H1,
            h2: H2
          }}
        />
      </div>
    );
  }
}

export default Markdown;
