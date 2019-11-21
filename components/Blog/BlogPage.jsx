import React, { Component } from 'react';
import Container from 'utils/Container';
import { metadata as ComoHacemosUnMeetupMetadata } from './Articles/como-hacemos-un-meetup.mdx';
import { metadata as ConsejosParaDarUnaCharlaMetadata } from './Articles/consejos-para-dar-una-charla.mdx';
import { metadata as ConsejosParaDarUnaLightningMetadata } from './Articles/consejos-para-dar-una-lightning-talk.mdx';
import { metadata as QueEsElCalendarioDeEventosMetadata } from './Articles/que-es-el-calendario-de-eventos.mdx';
import { metadata as ResenaMeetupAbril19Metadata } from './Articles/resena-meetup-abril-2019.mdx';
import { metadata as ResenaMeetupAgostoMetadata } from './Articles/resena-meetup-agosto-2018.mdx';
import { metadata as ResenaMeetupAgosto19Metadata } from './Articles/resena-meetup-agosto-2019.mdx';
import { metadata as ResenaMeetupJulioMetadata } from './Articles/resena-meetup-julio-2018.mdx';
import { metadata as ResenaMeetupJulio19Metadata } from './Articles/resena-meetup-julio-2019.mdx';
import { metadata as ResenaMeetupJunioMetadata } from './Articles/resena-meetup-junio-2018.mdx';
import { metadata as ResenaMeetupJunio19Metadata } from './Articles/resena-meetup-junio-2019.mdx';
import { metadata as ResenaMeetupMayoMetadata } from './Articles/resena-meetup-mayo-2018.mdx';
import { metadata as ResenaMeetupNoviembreMetadata } from './Articles/resena-meetup-noviembre-2018.mdx';
import { metadata as ResenaMeetupOctubreMetadata } from './Articles/resena-meetup-octubre-2018.mdx';
import { metadata as ResenaMeetupOctubre19Metadata } from './Articles/resena-meetup-octubre-2019.mdx';
import { metadata as ResenaMeetupSeptiembreMetadata } from './Articles/resena-meetup-septiembre-2018.mdx';
import { metadata as ResenaMeetupSeptiembre19Metadata } from './Articles/resena-meetup-septiembre-2019.mdx';
import './BlogPage.css';
import PostCard from './PostCard';

function splitByYear(articles) {
  return articles.reduce((prev, curr) => {
    const articleYear = curr.publishedDay.getFullYear();

    if (!prev[articleYear]) {
      // eslint-disable-next-line no-param-reassign
      prev[articleYear] = [];
    }

    prev[articleYear].push(curr);

    return prev;
  }, {});
}

export const allArticles = [
  ComoHacemosUnMeetupMetadata,
  ConsejosParaDarUnaCharlaMetadata,
  ConsejosParaDarUnaLightningMetadata,
  QueEsElCalendarioDeEventosMetadata,
  ResenaMeetupMayoMetadata,
  ResenaMeetupJunioMetadata,
  ResenaMeetupJulioMetadata,
  ResenaMeetupAgostoMetadata,
  ResenaMeetupSeptiembreMetadata,
  ResenaMeetupOctubreMetadata,
  ResenaMeetupNoviembreMetadata,
  ResenaMeetupAbril19Metadata,
  ResenaMeetupJunio19Metadata,
  ResenaMeetupJulio19Metadata,
  ResenaMeetupAgosto19Metadata,
  ResenaMeetupSeptiembre19Metadata,
  ResenaMeetupOctubre19Metadata
].sort((a, b) => b.publishedDay - a.publishedDay);
const articlesByYear = splitByYear(allArticles);
const years = Object.keys(articlesByYear)
  .map(Number)
  .sort((y1, y2) => y2 - y1);

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.articlesMetadata = { ...articlesByYear };
    this.years = [...years];
  }

  render() {
    return (
      <Container>
        <h1 className="font-bold text-center text-4xl">Blog</h1>
        {this.years.map(year => (
          <React.Fragment key={year}>
            <h3 className="font-bold mt-8 text-quaternary text-2xl">{year}</h3>
            {this.articlesMetadata[year].map(metadata => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <PostCard key={metadata.title} {...metadata} />
            ))}
          </React.Fragment>
        ))}
      </Container>
    );
  }
}

export default BlogPage;
