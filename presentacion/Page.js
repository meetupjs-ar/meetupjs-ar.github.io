import React from 'react';
import PropTypes from 'prop-types';
import Confetti from 'Confetti';

const Page = ({ children, confetti }) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: '#fffceb',
      borderTop: '5px solid #ffe45e',
      color: '#2e282a',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '30px',
      height: '100vh',
      justifyContent: 'center',
      position: 'relative',
      width: '100vw'
    }}
  >
    {confetti && <Confetti />}
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  confetti: PropTypes.bool
};

Page.defaultProps = {
  confetti: false
};

export default Page;
