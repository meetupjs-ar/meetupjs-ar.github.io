import getConfig from 'next/config';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

require('../css/styles.css');

const { publicRuntimeConfig } = getConfig();

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script async src="https://unpkg.com/boxicons@1.7.1/dist/boxicons.js" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="shortcut icon"
            href={`${publicRuntimeConfig.REACT_APP_URL}static/favicon.ico`}
          />
        </Head>
        <body>
          <div className="black-alternative lh-title sans-serif">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
