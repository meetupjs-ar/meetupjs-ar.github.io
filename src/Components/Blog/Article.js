import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Body from '../Body/Body';
import Markdown from '../Markdown/Markdown';
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
      <Body>
        <Markdown Content={Article} />
        <ArticleFooter authors={metadata.authors} publishedDay={metadata.publishedDay} />
      </Body>
    );
  }
}

export default Article;
