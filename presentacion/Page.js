import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <div
    style={{
      alignItems: 'center',
      color: '#2e282a',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '30px',
      height: '100vh',
      justifyContent: 'center'
    }}
  >
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
};

export default Page;
