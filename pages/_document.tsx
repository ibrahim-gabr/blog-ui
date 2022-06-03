import Document, { Head, Main, NextScript, Html } from "next/document";

/* -------------------------------------------------------------------------- */
/*                                  DOCUMENT                                  */
/* -------------------------------------------------------------------------- */

export default class NextDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#90cdf4" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Blog-UI" />
        </Head>
        <body id="body" dir="rtl" className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
