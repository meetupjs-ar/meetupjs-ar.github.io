import classnames from 'classnames';
import Link from 'next/link';
import React, { Component } from 'react';
import Container from 'utils/Container';
import formatAuthors from 'utils/formatAuthors';
import FormatDate from 'utils/FormatDate';
import './BlogPage.css';
import { metadata as ComoHacemosUnMeetupMetadata } from './Articles/como-hacemos-un-meetup.mdx';
import { metadata as ConsejosParaDarUnaCharlaMetadata } from './Articles/consejos-para-dar-una-charla.mdx';
import { metadata as ConsejosParaDarUnaLightningMetadata } from './Articles/consejos-para-dar-una-lightning-talk.mdx';
import { metadata as QueEsElCalendarioDeEventosMetadata } from './Articles/que-es-el-calendario-de-eventos.mdx';
import { metadata as ResenaMeetupAgostoMetadata } from './Articles/resena-meetup-agosto-2018.mdx';
import { metadata as ResenaMeetupJulioMetadata } from './Articles/resena-meetup-julio-2018.mdx';
import { metadata as ResenaMeetupJunioMetadata } from './Articles/resena-meetup-junio-2018.mdx';
import { metadata as ResenaMeetupMayoMetadata } from './Articles/resena-meetup-mayo-2018.mdx';
import { metadata as ResenaMeetupSeptiembreMetadata } from './Articles/resena-meetup-septiembre-2018.mdx';
import { metadata as ResenaMeetupOctubreMetadata } from './Articles/resena-meetup-octubre-2018.mdx';
import { metadata as ResenaMeetupNoviembreMetadata } from './Articles/resena-meetup-noviembre-2018.mdx';
import { metadata as ResenaMeetupAbril19Metadata } from './Articles/resena-meetup-abril-2019.mdx';
import { metadata as ResenaMeetupJunio19Metadata } from './Articles/resena-meetup-junio-2019.mdx';

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

const allArticles = [
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
  ResenaMeetupJunio19Metadata
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
              <div className="mt-8" key={metadata.title}>
                <Link href={metadata.relativeUrl} passHref>
                  <a
                    href="#!"
                    className="bg-animate block hover:bg-secondary-light overflow-hidden rounded"
                  >
                    {metadata.coverUrl && <img src={metadata.coverUrl} alt={metadata.coverAlt} />}
                    <div
                      className={classnames([
                        metadata.coverUrl ? 'border-b-2 border-l-2 border-r-2' : 'border-2',
                        'border-gray-300 border-solid p-4'
                      ])}
                    >
                      <h2 className="font-bold mb-4 text-xl lg:text-2xl">{metadata.title}</h2>
                      <p className="mb-4 text-quaternary text-sm">
                        <span>Por </span>
                        <strong>{formatAuthors(metadata.authors)}</strong>
                        <span>. Publicado el </span>
                        <FormatDate date={metadata.publishedDay} />
                        <span>.</span>
                      </p>
                      <p className="mv3">{metadata.description}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </React.Fragment>
        ))}
      </Container>
    );
  }
}

export default BlogPage;
