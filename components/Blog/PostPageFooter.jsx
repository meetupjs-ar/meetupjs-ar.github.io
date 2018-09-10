import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import FormatDate from 'utils/FormatDate';

const ArticleFooter = ({ authors, publishedDay }) => (
  <div className="mt4 tc">
    <p className="f6 mb3 mt0 silver">
      <span>Por </span>
      <strong>{authors.join(', ')}</strong>
      <span>. Publicado el </span>
      <FormatDate date={publishedDay} />
      <span>.</span>
    </p>
    <Link href="/blog">
      <a
        href="#!"
        className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu"
      >
        Ir al blog
      </a>
    </Link>
  </div>
);

ArticleFooter.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  publishedDay: PropTypes.objectOf(Date).isRequired
};

export default ArticleFooter;
