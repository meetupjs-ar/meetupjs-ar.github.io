import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';

class FormatDate extends PureComponent {
  static props = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  };

  static defaultProps = {
    alt: '',
    src: ''
  };

  render() {
    const { alt, src } = this.props;

    return (
      <LazyLoad height="100%" once={true}>
        <img src={src} alt={alt} {...this.props} />
      </LazyLoad>
    );
  }
}

export default FormatDate;
