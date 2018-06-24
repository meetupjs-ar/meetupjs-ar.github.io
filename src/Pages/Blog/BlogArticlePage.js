import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Container from '../Utils/Components/Container';
import Markdown from '../Utils/Components/Markdown/Markdown';
import Metatags from '../Utils/Components/Metatags';
import ArticleFooter from './Components/ArticleFooter';

class BlogArticlePage extends PureComponent {
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
      <Container>
        <Metatags metatags={metadata} />
        <Markdown Content={Article} />
        <ArticleFooter authors={metadata.authors} publishedDay={metadata.publishedDay} />
      </Container>
    );
  }
}

export default BlogArticlePage;
