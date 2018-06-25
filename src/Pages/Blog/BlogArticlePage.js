import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Container from '../Utils/Container';
import Markdown from '../Utils/Markdown/Markdown';
import Metatags from '../Utils/Metatags';
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
    // TODO: remove this hack
    this._isMounted = true;

    import(`./Articles/${this.props.name}.mdx`).then((articleModule) => {
      this._isMounted &&
        this.setState({
          Article: articleModule.default,
          metadata: articleModule.metadata
        });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
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
