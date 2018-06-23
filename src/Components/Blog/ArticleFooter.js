import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class ArticleFooter extends PureComponent {
  static props = {
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    publishedDay: PropTypes.string.isRequired
  };

  render() {
    const { authors, publishedDay } = this.props;

    return (
      <div className="mt4 tc">
        <p className="f6 mb3 mt0 silver">
          Por <strong>{authors.join(', ')}</strong>. Publicado el <strong>{publishedDay}</strong>.
        </p>
        <NavLink
          to="/blog.html"
          className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu"
        >
          Ir al blog
        </NavLink>
      </div>
    );
  }
}

export default ArticleFooter;
