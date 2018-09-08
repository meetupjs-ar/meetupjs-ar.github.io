import React from 'react';
import Container from '../Utils/Container';
import Markdown from '../Utils/Markdown';
import CodeOfConduct from './CodeOfConduct.mdx';

const CodeOfConductPage = () => (
  <Container>
    <Markdown Content={CodeOfConduct} />
  </Container>
);

export default CodeOfConductPage;
