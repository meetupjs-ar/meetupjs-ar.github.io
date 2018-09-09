import Link from 'next/link';
import React, { Component } from 'react';
import Container from 'utils/Container';
import FormatDate from 'utils/FormatDate';
import { metadata as ComoHacemosUnMeetupMetadata } from './Articles/como-hacemos-un-meetup.mdx';
import { metadata as ConsejosParaDarUnaCharlaMetadata } from './Articles/consejos-para-dar-una-charla.mdx';
import { metadata as ConsejosParaDarUnaLightningMetadata } from './Articles/consejos-para-dar-una-lightning-talk.mdx';
import { metadata as QueEsElCalendarioDeEventosMetadata } from './Articles/que-es-el-calendario-de-eventos.mdx';
import { metadata as ResenaMeetupAgostoMetadata } from './Articles/resena-meetup-agosto-2018.mdx';
import { metadata as ResenaMeetupJulioMetadata } from './Articles/resena-meetup-julio-2018.mdx';
import { metadata as ResenaMeetupJunioMetadata } from './Articles/resena-meetup-junio-2018.mdx';
import { metadata as ResenaMeetupMayoMetadata } from './Articles/resena-meetup-mayo-2018.mdx';

const publishedArticles = [
  ComoHacemosUnMeetupMetadata,
  ConsejosParaDarUnaCharlaMetadata,
  ConsejosParaDarUnaLightningMetadata,
  QueEsElCalendarioDeEventosMetadata,
  ResenaMeetupMayoMetadata,
  ResenaMeetupJunioMetadata,
  ResenaMeetupJulioMetadata,
  ResenaMeetupAgostoMetadata
].sort((a, b) => b.publishedDay - a.publishedDay);

class BlogPage extends Component {
  state = {
    articlesMetadata: [...publishedArticles]
  };

  render() {
    return (
      <Container>
        <h1 className="mv0 tc">Blog</h1>
        {this.state.articlesMetadata.map((metadata) => (
          <div className="mt4" key={metadata.title}>
            <Link href={metadata.relativeUrl}>
              <a className="black-alternative bg-animate br2 db bg-white hover-bg-washed-yellow no-underline overflow-hidden">
                {metadata.coverUrl && (
                  <img src={metadata.coverUrl} alt={metadata.coverAlt} className="v-btm" />
                )}
                <div className={`${metadata.coverUrl ? 'bb bl br' : 'ba'} b--black-10 bw1 pa3`}>
                  <h2 className="f4 f3-ns mb3 mt0">{metadata.title}</h2>
                  <p className="f6 mb0 mt3 silver">
                    Por <strong>{metadata.authors.join(', ')}</strong>. Publicado el{' '}
                    <FormatDate date={metadata.publishedDay} />.
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
