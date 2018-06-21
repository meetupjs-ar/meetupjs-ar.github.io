import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import Markdown from '../Markdown/Markdown';

class Article extends PureComponent {
  static props = {
    name: PropTypes.string.isRequired
  };

  state = {
    Article: null,
    metadata: null
  };

  componentDidMount() {
    import(`./Articles/${this.props.name}.mdx`).then((articleModule) => {
      this.setState({
        Article: articleModule.default,
        metadata: articleModule.metadata
      });
    });
  }

  render() {
    const { Article, metadata } = this.state;

    if (!Article) return null;

    return (
      <div className="center mw7 ph3 pv5">
        <Markdown Content={Article} />
        <div className="mt4 pt3 tc">
          <p className="f6 mb3 mt0 silver">
            Por <strong>{metadata.authors.join(', ')}</strong>. Publicado el{' '}
            <strong>{metadata.publishedDay}</strong>.
          </p>
          <NavLink
            to="/blog.html"
            className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu"
          >
            Ir al blog
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Article;
