import getConfig from 'next/config';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const Footer = () => (
  <footer className="b--black-10 bt bg-washed-yellow bw1 pv3">
    <div className="center mw9 ph3">
      <div className="f6 flex justify-between">
        <p className="mv0">Meetup.js - Buenos Aires</p>
        <p className="flex items-center justify-end mv0">
          <span className="mr1">Version</span>
          <span>{publicRuntimeConfig.REACT_APP_VERSION}</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
