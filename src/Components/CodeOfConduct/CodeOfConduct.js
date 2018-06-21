import React, { PureComponent } from 'react';
import Markdown from '../Markdown/Markdown';
import CodeOfConductMarkdown from './CodeOfConduct.mdx';

class CodeOfConduct extends PureComponent {
  render() {
    return (
      <div className="center mw7 ph3 pv5">
        <Markdown Content={CodeOfConductMarkdown} />
      </div>
    );
  }
}

export default CodeOfConduct;
