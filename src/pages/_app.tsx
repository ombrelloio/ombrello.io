import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
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

      <Script
        id="Clarty"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "du5dg3g8uw");
  `,
        }}
      />

      <Script
        id="matomo"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          
      var _paq = window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://ombrelloiovercelapp.matomo.cloud/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '1']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='//cdn.matomo.cloud/ombrelloiovercelapp.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    
  `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default App;
