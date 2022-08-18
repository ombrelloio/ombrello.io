import { ReactElement } from "react";
import cx from "classnames";

import Document, { Html, Head, Main, NextScript } from "next/document";
import { defaultTheme, prefix } from "@app/constants";

/*
_document.tsx is a class component because it requires to extend Next's React classes.
*/
export default class MyDocument extends Document {
  render(): ReactElement {
    /**
     * Setting initial page theme class:
     */
    // eslint-disable-next-line no-underscore-dangle
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    const themeClass =
      pageProps?.page?.pageTheme?.toLowerCase() || defaultTheme;

    //
    return (
      <Html lang="en">
        <Head />
        <body className={cx(`${prefix}${themeClass}`)}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
