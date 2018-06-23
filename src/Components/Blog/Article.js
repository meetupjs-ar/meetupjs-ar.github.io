import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Container from '../Container/Container';
import Markdown from '../Markdown/Markdown';
import Metatags from '../Metatags/Metatags';
import ArticleFooter from './ArticleFooter';

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
      <Container>
        <Metatags metatags={metadata} />
        <Markdown Content={Article} />
        <ArticleFooter authors={metadata.authors} publishedDay={metadata.publishedDay} />
      </Container>
    );
  }
}

export default Article;
