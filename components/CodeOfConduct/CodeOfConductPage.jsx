import React from 'react';
import Container from 'utils/Container';
import Markdown from 'utils/Markdown';
import CodeOfConduct from './CodeOfConduct.mdx';

const CodeOfConductPage = () => (
  <Container>
    <Markdown Content={CodeOfConduct} />
  </Container>
);

export default CodeOfConductPage;
