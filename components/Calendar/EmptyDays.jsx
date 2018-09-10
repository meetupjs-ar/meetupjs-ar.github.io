import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

const emptyDaysStyles = css`
  .emptyDay {
    background: repeating-linear-gradient(
      45deg,
      #f9f9f9,
      #f9f9f9 10px,
      rgba(0, 0, 0, 0.05) 10px,
      rgba(0, 0, 0, 0.05) 20px
    );
  }
`;

const EmptyDays = ({ days }) => {
  const emptyDays = [];

  for (let index = 0; index < days; index += 1) {
    emptyDays.push(
      <div
        key={index}
        className="b--black-10 bb bg-near-white bl bw1 dn db-l emptyDay width-one-seventh-l"
      />
    );
  }

  return (
    <React.Fragment>
      <style jsx global>
        {emptyDaysStyles}
      </style>
      {emptyDays}
    </React.Fragment>
  );
};

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired
};

export default EmptyDays;
