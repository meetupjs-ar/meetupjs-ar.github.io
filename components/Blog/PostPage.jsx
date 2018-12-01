import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Container from 'utils/Container';
import formatAuthors from 'utils/formatAuthors';
import Markdown from 'utils/Markdown';
import PostPageFooter from './PostPageFooter';

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
        <PostPageFooter
          authors={formatAuthors(this.metadata.authors)}
          publishedDay={this.metadata.publishedDay}
        />
      </Container>
    );
  }
}

export default BlogArticlePage;
