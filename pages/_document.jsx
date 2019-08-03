import getConfig from 'next/config';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://unpkg.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script async src="https://unpkg.com/boxicons@1.8.1/dist/boxicons.js" />
          <link
            rel="shortcut icon"
            href={`${publicRuntimeConfig.REACT_APP_URL}static/favicon.ico`}
          />
        </Head>
        <body className="black-alternative lh-title sans-serif">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
