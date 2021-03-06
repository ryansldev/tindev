import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <meta name="description" content="Tindev"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};