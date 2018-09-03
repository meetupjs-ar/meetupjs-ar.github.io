import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatDate from '../../Utils/FormatDate';

const ArticleFooter = ({ authors, publishedDay }) => {
  return (
    <div className="mt4 tc">
      <p className="f6 mb3 mt0 silver">
        Por <strong>{authors.join(', ')}</strong>. Publicado el <FormatDate date={publishedDay} />.
      </p>
      <NavLink
        to="/blog.html"
        className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu"
      >
        Ir al blog
      </NavLink>
    </div>
  );
};

ArticleFooter.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  publishedDay: PropTypes.objectOf(Date).isRequired
};

export default ArticleFooter;
