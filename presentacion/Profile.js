import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, twitter }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '1rem',
      width: '22vw'
    }}
  >
    <div
      style={{
        backgroundImage: `url(http://avatars.io/twitter/${twitter})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        filter: 'grayscale(100)',
        height: '30vh'
      }}
    />
    <p>{name}</p>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired
};

export default Profile;
