import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

const markdownStyles = css`
  .markdownBody {
    line-height: 1.5;
  }

  .markdownBody :global(> div > *:first-child) {
    margin-bottom: 2rem;
    margin-top: 0;
  }

  .markdownBody :global(> div > *:last-child) {
    margin-bottom: 0;
  }

  .markdownBody :global(> div a) {
    box-shadow: inset 0 -2px 0 0 var(--color-secondary);
    color: var(--color-main);
    display: inline-block;
    font-weight: bold;
    padding-left: 0.125rem;
    padding-right: 0.125rem;
    transition: var(--transition);
    text-decoration: none;
  }

  .markdownBody :global(> div a:hover) {
    background-color: var(--color-secondary);
  }

  .markdownBody :global(> div blockquote) {
    background-color: var(--color-tertiary);
    border-left: 0.25rem solid var(--color-secondary);
    font-style: italic;
    margin-left: 0;
    margin-right: 0;
    padding: 0.125rem 1rem;
  }

  .markdownBody :global(> div h1) {
    color: var(--color-main);
    font-size: 2rem;
    line-height: 1.25;
    text-align: center;
  }

  .markdownBody :global(> div h2) {
    color: #999;
    margin: 2rem 0;
  }

  .markdownBody :global(> div h3, > div h4, > div h5, > div h6) {
    color: #777;
    margin: 1rem 0;
  }

  .markdownBody :global(> div img) {
    display: block;
    margin: 2rem 0;
    width: 100%;
  }

  .markdownBody :global(> div strong) {
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient(
      -100deg,
      rgba(250, 247, 133, 0.3),
      rgba(250, 247, 133, 0.7) 95%,
      rgba(250, 247, 133, 0.1)
    );
  }
`;

const Markdown = ({ Content }) => (
  <React.Fragment>
    <style jsx>{markdownStyles}</style>
    <div className="markdownBody">
      <Content />
    </div>
  </React.Fragment>
);

Markdown.propTypes = {
  Content: PropTypes.func.isRequired
};

export default Markdown;
