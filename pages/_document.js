import { Html, Head, Main, NextScript } from 'next/document'
import { metadata } from './_app'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BVSVRP4JRJ"></script>
        <script dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BVSVRP4JRJ');`,
        }}
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
