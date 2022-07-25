import { ReactElement } from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

/*
_document.tsx is a class component because it requires to extend Next's React classes.
*/
export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
