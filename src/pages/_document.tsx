import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html
        lang="en-US"
        className="font-sans dark:antialiased selection:bg-gray-500 selection:bg-opacity-10"
      >
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>

        <body className="bg-gray-50 dark:bg-gray-900">
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
