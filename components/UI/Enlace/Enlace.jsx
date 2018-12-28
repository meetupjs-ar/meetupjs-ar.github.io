import React from 'react';
import PropTypes from 'prop-types';

const Enlace = ({ children, className, target, ...props }) => (
  <a
    rel="noopener noreferrer"
    target={target}
    className={`b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow no-underline ph3 pv2 ttu ${className}`}
    {...props}
  >
    {children}
  </a>
);

Enlace.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  className: PropTypes.string,
  target: PropTypes.string
};

Enlace.defaultProps = {
  className: '',
  target: '_self'
};

Enlace.displayName = 'Enlace';

export default Enlace;
