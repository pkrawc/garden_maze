import { default as NextDoc, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
export default class Document extends NextDoc {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styles = sheet.getStyleElement()
    return { ...page, styles }
  }
  render() {
    return (
      <html>
        <Head>{this.props.styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
