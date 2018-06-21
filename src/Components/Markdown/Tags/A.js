import React, { PureComponent } from 'react';

class A extends PureComponent {
  render() {
    // eslint-disable-next-line
    return <a className="b blue link" {...this.props} />;
  }
}

export default A;
