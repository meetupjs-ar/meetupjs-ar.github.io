import Link from 'next/link';
import React, { Component } from 'react';
import Container from 'utils/Container';
import formatAuthors from 'utils/formatAuthors';
import FormatDate from 'utils/FormatDate';
import { metadata as ComoHacemosUnMeetupMetadata } from './Articles/como-hacemos-un-meetup.mdx';
import { metadata as ConsejosParaDarUnaCharlaMetadata } from './Articles/consejos-para-dar-una-charla.mdx';
import { metadata as ConsejosParaDarUnaLightningMetadata } from './Articles/consejos-para-dar-una-lightning-talk.mdx';
import { metadata as QueEsElCalendarioDeEventosMetadata } from './Articles/que-es-el-calendario-de-eventos.mdx';
import { metadata as ResenaMeetupAgostoMetadata } from './Articles/resena-meetup-agosto-2018.mdx';
import { metadata as ResenaMeetupJulioMetadata } from './Articles/resena-meetup-julio-2018.mdx';
import { metadata as ResenaMeetupJunioMetadata } from './Articles/resena-meetup-junio-2018.mdx';
import { metadata as ResenaMeetupMayoMetadata } from './Articles/resena-meetup-mayo-2018.mdx';
import { metadata as ResenaMeetupSeptiembreMetadata } from './Articles/resena-meetup-septiembre-2018.mdx';
// import { metadata as ResenaMeetupOctubreMetadata } from './Articles/resena-meetup-octubre-2018.mdx';

const publishedArticles = [
  ComoHacemosUnMeetupMetadata,
  ConsejosParaDarUnaCharlaMetadata,
  ConsejosParaDarUnaLightningMetadata,
  QueEsElCalendarioDeEventosMetadata,
  ResenaMeetupMayoMetadata,
  ResenaMeetupJunioMetadata,
  ResenaMeetupJulioMetadata,
  ResenaMeetupAgostoMetadata,
  ResenaMeetupSeptiembreMetadata
  // ResenaMeetupOctubreMetadata
].sort((a, b) => b.publishedDay - a.publishedDay);

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.articlesMetadata = [...publishedArticles];
  }

  render() {
    return (
      <Container>
        <h1 className="mv0 tc">Blog</h1>
        {this.articlesMetadata.map(metadata => (
          <div className="mt4" key={metadata.title}>
            <Link href={metadata.relativeUrl} passHref>
              <a
                href="#!"
                className="black-alternative bg-animate br2 db bg-white hover-bg-washed-yellow no-underline overflow-hidden"
              >
                {metadata.coverUrl && (
                  <img src={metadata.coverUrl} alt={metadata.coverAlt} className="v-btm" />
                )}
                <div className={`${metadata.coverUrl ? 'bb bl br' : 'ba'} b--black-10 bw1 pa3`}>
                  <h2 className="f4 f3-ns mb3 mt0">{metadata.title}</h2>
                  <p className="black-alternative-light f6 mb0 mt3">
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
      </Container>
    );
  }
}

export default BlogPage;
