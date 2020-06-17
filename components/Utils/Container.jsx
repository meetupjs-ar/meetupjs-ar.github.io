import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ large, ...rest }) => (
  <div
    className={classnames([large === 'large' ? 'max-w-7xl' : 'max-w-3xl', 'mx-auto px-4 py-16'])}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  />
);

Container.propTypes = {
  large: PropTypes.string,
};

Container.defaultProps = {
  large: '',
};

export default Container;
