import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

const fullWidthStyles = css`
  .imageShadow {
    box-shadow: 8px 8px var(--color-secondary);
  }

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
    <img src={src} alt={alt} className="imageShadow" {...rest} />
  </div>
);

export default Img;
