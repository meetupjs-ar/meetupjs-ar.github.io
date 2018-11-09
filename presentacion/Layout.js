import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div
    style={{
      backgroundColor: '#fffceb',
      height: '100vh',
      width: '100vw'
    }}
  >
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
};

export default Layout;
