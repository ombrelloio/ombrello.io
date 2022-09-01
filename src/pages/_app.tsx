import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import SEO from "../../next-seo.config";
import "@app/styles/global.scss";

gsap.registerPlugin(ScrollTrigger);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />

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
