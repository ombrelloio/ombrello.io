import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

import SEO from "../../next-seo.config";
import "@app/styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        {...SEO}
        // titleTemplate="%s"
        // additionalLinkTags={[
        //   {
        //     rel: "apple-touch-icon",
        //     href: `/favicon/apple-touch-icon.png`,
        //     sizes: "180x180",
        //   },
        //   {
        //     rel: "icon",
        //     type: "image/png",
        //     href: `/favicon/favicon-32x32.png`,
        //     sizes: "32x32",
        //   },
        //   {
        //     rel: "icon",
        //     type: "image/png",
        //     href: `/favicon/favicon-16x16.png`,
        //     sizes: "16x16",
        //   },
        //   {
        //     rel: "manifest",
        //     href: `/favicon/site.webmanifest`,
        //   },
        //   {
        //     rel: "mask-icon",
        //     href: `/favicon/safari-pinned-tab.svg`,
        //     color: "#1a51a4",
        //   },
        // ]}
        // additionalMetaTags={[
        //   {
        //     name: "msapplication-TileColor",
        //     content: "#ffffff",
        //   },
        //   {
        //     name: "theme-color",
        //     content: "#ffffff",
        //   },
        // ]}
      />

      <Head>
        <link
          rel="preload"
          href="/fonts/strawford/web/strawford-regular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <link
          rel="preload"
          href="/fonts/strawford/web/strawford-medium-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <link
          rel="preload"
          href="/fonts/strawford/web/strawford-bold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <link
          rel="preload"
          href="/fonts/strawford/web/strawford-regularitalic-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <link
          rel="preload"
          href="/fonts/strawford/web/strawford-mediumitalic-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <link
          rel="preload"
          href="/fonts/strawford/web/strawford-bolditalic-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
