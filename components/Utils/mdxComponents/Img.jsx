import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

const fullWidthStyles = css`
  @media (min-width: 1024px) {
    .fullWidth {
      margin-left: -5rem;
      margin-right: -5rem;
    }
  }
`;

const Img = ({ src, alt, ...rest }) => (
  <div className="fullWidth">
    <style jsx>{fullWidthStyles}</style>
    <img src={src} alt={alt} {...rest} />
  </div>
);

export default Img;
