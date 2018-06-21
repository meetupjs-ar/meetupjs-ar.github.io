import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { metadata as QueEsElCalendarioDeEventosMetadata } from './Articles/01-que-es-el-calendario-de-eventos.mdx';
import { metadata as ComoHacemosUnMeetupMetadata } from './Articles/02-como-hacemos-un-meetup.mdx';
import { metadata as ConsejosParaDarUnaLightningMetadata } from './Articles/03-consejos-para-dar-una-lightning-talk.mdx';
import { metadata as ConsejosParaDarUnaCharlaMetadata } from './Articles/04-consejos-para-dar-una-charla.mdx';
import { metadata as ResenaMeetupMayoMetadata } from './Articles/05-resena-meetup-mayo-2018.mdx';

class BlogList extends PureComponent {
  state = {
    articlesMetadata: [
      ResenaMeetupMayoMetadata,
      ConsejosParaDarUnaCharlaMetadata,
      ConsejosParaDarUnaLightningMetadata,
      ComoHacemosUnMeetupMetadata,
      QueEsElCalendarioDeEventosMetadata
    ]
  };

  render() {
    return (
      <div className="center mw7 ph3 pv5">
        <h1 className="mv0 tc">Blog</h1>
        {this.state.articlesMetadata.map((metadata) => (
          <section className="mt5" key={metadata.title}>
            <article>
              <h2 className="f4 f3-ns mb3 mt0">{metadata.title}</h2>
              <p className="f6 ma0 silver">
                Por <strong>{metadata.authors.join(', ')}</strong>. Publicado el{' '}
                <strong>{metadata.publishedDay}</strong>.
              </p>
              <p className="mv3">{metadata.introduction}</p>
              <NavLink
                to={`articulos/${metadata.url}`}
                className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu"
              >
                Leer
              </NavLink>
            </article>
          </section>
        ))}
      </div>
    );
  }
}

export default BlogList;
