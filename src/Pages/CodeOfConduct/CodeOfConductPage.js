import React, { PureComponent } from 'react';
import Container from '../Utils/Components/Container';
import Markdown from '../Utils/Components/Markdown/Markdown';
import Metatags from '../Utils/Components/Metatags';
import CodeOfConduct from './CodeOfConduct.mdx';
import CodeOfConductPageMetatags from './CodeOfConductPageMetatags';

class CodeOfConductPage extends PureComponent {
  render() {
    return (
      <Container>
        <Metatags metatags={CodeOfConductPageMetatags} />
        <Markdown Content={CodeOfConduct} />
      </Container>
    );
  }
}

export default CodeOfConductPage;
