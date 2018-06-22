import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

class Metatags extends PureComponent {
  static props = {
    metatags: PropTypes.shape({
      absoluteUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { metatags } = this.props;

    return (
      <Helmet>
        <title>{metatags.title}</title>
        <meta name="description" content={metatags.description} />
        <meta name="twitter:description" content={metatags.description} />
        <meta name="twitter:title" content={metatags.title} />
        <meta property="og:description" content={metatags.description} />
        <meta property="og:title" content={metatags.title} />
        <meta property="og:url" content={metatags.absoluteUrl} />
      </Helmet>
    );
  }
}

export default Metatags;
