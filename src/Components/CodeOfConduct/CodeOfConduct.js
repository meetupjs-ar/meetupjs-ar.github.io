import React, { PureComponent } from 'react';
import Container from '../Container/Container';
import Markdown from '../Markdown/Markdown';
import Metatags from '../Metatags/Metatags';
import CodeOfConductMarkdown from './CodeOfConduct.mdx';
import CodeOfConductPageMetatags from './CodeOfConductMetatags';

class CodeOfConduct extends PureComponent {
  render() {
    return (
      <Container>
        <Metatags metatags={CodeOfConductPageMetatags} />
        <Markdown Content={CodeOfConductMarkdown} />
      </Container>
    );
  }
}

export default CodeOfConduct;
