import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import FormatDate from 'utils/FormatDate';

const PostPageFooter = ({ authors, publishedDay }) => (
  <div className="mt-8 text-center">
    <p className="text-quaternary text-sm mb-4">
      <span>Por </span>
      <strong>{authors}</strong>
      <span>. Publicado el </span>
      <FormatDate date={publishedDay} />
      <span>.</span>
    </p>
    <Link href="/blog.html" passHref>
      <a
        href="#!"
        className="bg-secondary border-black-10 border-2 font-bold inline-block px-5 py-2 rounded text-sm uppercase"
      >
        Ir al blog
      </a>
    </Link>
  </div>
);

PostPageFooter.propTypes = {
  authors: PropTypes.string.isRequired,
  publishedDay: PropTypes.objectOf(Date).isRequired,
};

export default PostPageFooter;
