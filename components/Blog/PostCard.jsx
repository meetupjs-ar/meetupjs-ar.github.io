import classnames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import formatAuthors from 'utils/formatAuthors';
import FormatDate from 'utils/FormatDate';

const PostCard = ({
  title,
  relativeUrl,
  coverAlt,
  coverUrl,
  authors,
  publishedDay,
  description,
}) => (
  <div className="mt-8" key={title}>
    <Link href={relativeUrl} passHref>
      <a href="#!" className="bg-animate block hover:bg-secondary-light overflow-hidden rounded">
        {coverUrl && (
          <img
            src={`https://raw.githubusercontent.com/meetupjs-ar/meetupjs-ar.github.io/dev${coverUrl}`}
            alt={coverAlt}
          />
        )}
        <div
          className={classnames([
            coverUrl ? 'border-b-2 border-l-2 border-r-2' : 'border-2',
            'border-gray-300 border-solid p-4',
          ])}
        >
          <h2 className="font-bold mb-4 text-xl lg:text-2xl">{title}</h2>
          <p className="mb-1 text-quaternary text-sm">
            <span>Por </span>
            <strong>{formatAuthors(authors)}</strong>
            <span>.</span>
          </p>
          <p className="mb-4 text-quaternary text-sm">
            <span>Publicado el </span>
            <FormatDate date={publishedDay} />
            <span>.</span>
          </p>
          <p className="mv3">{description}</p>
        </div>
      </a>
    </Link>
  </div>
);

PostCard.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverAlt: PropTypes.string,
  coverUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
  publishedDay: PropTypes.objectOf(Date).isRequired,
  relativeUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

PostCard.defaultProps = {
  coverAlt: '',
  coverUrl: '',
};

export default PostCard;
