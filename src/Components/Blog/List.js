import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import Body from '../Body/Body';
import Metatags from '../Metatags/Metatags';
import { metadata as ComoHacemosUnMeetupMetadata } from './Articles/como-hacemos-un-meetup.mdx';
import { metadata as ConsejosParaDarUnaCharlaMetadata } from './Articles/consejos-para-dar-una-charla.mdx';
import { metadata as ConsejosParaDarUnaLightningMetadata } from './Articles/consejos-para-dar-una-lightning-talk.mdx';
import { metadata as QueEsElCalendarioDeEventosMetadata } from './Articles/que-es-el-calendario-de-eventos.mdx';
import { metadata as ResenaMeetupMayoMetadata } from './Articles/resena-meetup-mayo-2018.mdx';
import BlogPageMetatags from './ListMetatags';

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
      <Body>
        <Metatags metatags={BlogPageMetatags} />
        <h1 className="mv0 tc">Blog</h1>
        {this.state.articlesMetadata.map((metadata) => (
          <div className="mt4" key={metadata.title}>
            <div className="b--black-10 ba bg-white br2 bw1 pa3">
              <h2 className="f4 f3-ns mb3 mt0">{metadata.title}</h2>
              <p className="f6 ma0 silver">
                Por <strong>{metadata.authors.join(', ')}</strong>. Publicado el{' '}
                <strong>{metadata.publishedDay}</strong>.
              </p>
              <p className="mv3">{metadata.description}</p>
              <NavLink
                to={metadata.relativeUrl}
                className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu"
              >
                Leer
              </NavLink>
            </div>
          </div>
        ))}
      </Body>
    );
  }
}

export default BlogList;
