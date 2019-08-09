import getConfig from 'next/config';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const Footer = () => (
  <footer className="bg-secondary-light border-black-10 border-t-2 py-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between text-sm">
        <p className="my-0">Meetup.js - Buenos Aires</p>
        <p className="my-0">
          <span>Version </span>
          <span>{publicRuntimeConfig.REACT_APP_VERSION}</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
