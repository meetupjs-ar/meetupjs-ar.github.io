import getConfig from 'next/config';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import tachyons from 'tachyons/css/tachyons.min.css';

const { publicRuntimeConfig } = getConfig();

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            href={`${publicRuntimeConfig.REACT_APP_URL}static/favicon.ico`}
          />
          <style jsx global>
            {tachyons}
          </style>
          <style jsx global>
            {`
              ::-moz-selection {
                background-color: var(--color-secondary);
              }

              ::selection {
                background-color: var(--color-secondary);
              }

              :root {
                --color-primary: #2e282a;
                --color-secondary: #ffe45e;
                --color-tertiary: #fffceb;
                --transition: all 0.35s ease-out;
              }

              body {
                margin: 0;
                -moz-osx-font-smoothing: grayscale;
                padding-top: 68px;
                -webkit-font-smoothing: antialiased;
              }

              .bg-yellow-alternative {
                background-color: var(--color-secondary);
              }

              .black-alternative {
                color: var(--color-primary);
              }

              .cursor-default {
                cursor: default;
              }

              .f30 {
                font-size: 30px;
              }

              @keyframes fadeIn {
                0% {
                  opacity: 0;
                }

                100% {
                  opacity: 1;
                }
              }

              .fade-in {
                animation-duration: 1s;
                animation-name: fadeIn;
              }

              @keyframes fadeInDown {
                0% {
                  opacity: 0;
                  transform: translate3d(0, -15%, 0);
                }

                100% {
                  opacity: 1;
                  transform: none;
                }
              }

              .fade-in-down {
                animation-duration: 0.5s;
                animation-name: fadeInDown;
              }

              .m-h5 {
                max-height: 16rem;
              }

              .m-vh-75 {
                max-height: 75vh;
              }

              .user-select-none {
                user-select: none;
              }

              .w30 {
                width: 30px;
              }

              @media screen and (min-width: 60em) {
                .width-one-seventh-l {
                  width: calc(100% / 7);
                }
              }
            `}
          </style>
        </Head>
        <body>
          <div className="black-alternative lh-title sans-serif">
            <Main />
            <NextScript />
          </div>
          <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js" />
        </body>
      </html>
    );
  }
}
