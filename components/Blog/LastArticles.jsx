import PropTypes from 'prop-types';
import React from 'react';
import { allArticles } from './BlogPage';
import PostCard from './PostCard';

const LastArticles = ({ currentArticle }) => {
  const articlesToShow = allArticles
    .filter(article => article.title !== currentArticle)
    .slice(0, 2);

  return (
    <>
      <h3 className="font-bold text-2xl text-center text-quaternary">
        Artículos de nuestro blog que podrían interesarte
      </h3>
      <div className="md:flex -mx-2">
        {articlesToShow.map(article => (
          <div key={article.title} className="px-2">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <PostCard {...article} />
          </div>
        ))}
      </div>
    </>
  );
};

LastArticles.propTypes = {
  currentArticle: PropTypes.string
};

LastArticles.defaultProps = {
  currentArticle: ''
};

export default LastArticles;
