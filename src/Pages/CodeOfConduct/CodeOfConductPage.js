import React from 'react';
import Container from '../Utils/Container';
import Markdown from '../Utils/Markdown/Markdown';
import Metatags from '../Utils/Metatags';
import CodeOfConduct from './CodeOfConduct.mdx';
import CodeOfConductPageMetatags from './CodeOfConductPageMetatags';

const CodeOfConductPage = () => (
  <Container>
    <Metatags metatags={CodeOfConductPageMetatags} />
    <Markdown Content={CodeOfConduct} />
  </Container>
);

export default CodeOfConductPage;
