import React, { PureComponent } from 'react';
import A from '../MarkdownTags/A';
import H1 from '../MarkdownTags/H1';
import H2 from '../MarkdownTags/H2';
import CodeOfConductMarkdown from './CodeOfConduct.mdx';

class CodeOfConduct extends PureComponent {
  render() {
    return (
      <div className="black-alternative center lh-copy mw7 ph3 pv5">
        <CodeOfConductMarkdown
          components={{
            a: A,
            h1: H1,
            h2: H2
          }}
        />
      </div>
    );
  }
}

export default CodeOfConduct;
