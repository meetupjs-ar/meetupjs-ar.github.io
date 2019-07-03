import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Container from 'utils/Container';
import Markdown from 'utils/Markdown';

class EventPage extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    const { name } = this.props;
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const articleModule = require(`./Meetups/${name}.mdx`);

    this.article = articleModule.default;
  }

  render() {
    return (
      <Container>
        <Markdown Content={this.article} bigFont />
      </Container>
    );
  }
}

export default EventPage;
