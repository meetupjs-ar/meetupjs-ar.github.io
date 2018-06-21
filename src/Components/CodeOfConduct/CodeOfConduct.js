import React, { PureComponent } from 'react';
import Body from '../Body/Body';
import Markdown from '../Markdown/Markdown';
import CodeOfConductMarkdown from './CodeOfConduct.mdx';

class CodeOfConduct extends PureComponent {
  render() {
    return (
      <Body>
        <Markdown Content={CodeOfConductMarkdown} />
      </Body>
    );
  }
}

export default CodeOfConduct;
