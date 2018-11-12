import React from 'react';
import PropTypes from 'prop-types';
import P from './Paragraph';

const Profile = ({ name, twitter }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '1rem',
      width: '25vw'
    }}
  >
    <img
      src={`http://avatars.io/twitter/${twitter}`}
      alt={name}
      style={{
        filter: 'grayscale(100)',
        margin: '0 auto',
        maxWidth: '18vw',
        width: '100%'
      }}
    />
    <P>{name}</P>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired
};

export default Profile;
