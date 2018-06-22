import React, { PureComponent } from 'react';
import Body from '../Body/Body';
import Markdown from '../Markdown/Markdown';
import Metatags from '../Metatags/Metatags';
import CodeOfConductMarkdown from './CodeOfConduct.mdx';
import CodeOfConductPageMetatags from './CodeOfConductMetatags';

class CodeOfConduct extends PureComponent {
  render() {
    return (
      <Body>
        <Metatags metatags={CodeOfConductPageMetatags} />
        <Markdown Content={CodeOfConductMarkdown} />
      </Body>
    );
  }
}

export default CodeOfConduct;
