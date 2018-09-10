import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Container from 'utils/Container';
import Markdown from 'utils/Markdown';
import ArticleFooter from './PostPageFooter';

class BlogArticlePage extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    const { name } = this.props;
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const articleModule = require(`./Articles/${name}.mdx`);

    this.state = {
      Article: articleModule.default,
      metadata: articleModule.metadata
    };
  }

  render() {
    const { Article, metadata } = this.state;

    return (
      <Container>
        <Markdown Content={Article} />
        <ArticleFooter authors={metadata.authors} publishedDay={metadata.publishedDay} />
      </Container>
    );
  }
}

export default BlogArticlePage;
