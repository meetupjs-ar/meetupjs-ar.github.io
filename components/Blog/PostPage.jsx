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

    this.article = articleModule.default;
    this.metadata = articleModule.metadata;
  }

  render() {
    return (
      <Container>
        <Markdown Content={this.article} bigFont />
        <ArticleFooter authors={this.metadata.authors} publishedDay={this.metadata.publishedDay} />
      </Container>
    );
  }
}

export default BlogArticlePage;
