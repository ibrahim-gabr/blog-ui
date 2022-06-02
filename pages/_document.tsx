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

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#90cdf4" />
          <meta name="application-name" content="PWA App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Takhair" />
        </Head>
        <body id="body" dir="rtl" className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
