import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Container from 'utils/Container';
import formatAuthors from 'utils/formatAuthors';
import Markdown from 'utils/Markdown';
import LastArticles from './LastArticles';
import PostPageFooter from './PostPageFooter';

class BlogArticlePage extends Component {
  constructor(props) {
    super(props);

    const { name } = this.props;
    // eslint-disable-next-line import/no-dynamic-require
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
        <div className="mt-16">
          <LastArticles currentArticle={this.metadata.title} />
        </div>
      </Container>
    );
  }
}

BlogArticlePage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BlogArticlePage;
