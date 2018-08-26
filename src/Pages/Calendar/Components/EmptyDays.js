import PropTypes from 'prop-types';
import React from 'react';
import * as css from '../css/EmptyDays.module.css';

const EmptyDays = ({ days }) => {
  const emptyDays = [];

  for (let index = 0; index < days; index++) {
    emptyDays.push(
      <div
        key={index}
        className={`${
          css.emptyDay
        } b--black-10 bb bg-near-white bl bw1 dn db-l width-one-seventh-l`}
      />
    );
  }

  return emptyDays;
};

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired
};

export default EmptyDays;
