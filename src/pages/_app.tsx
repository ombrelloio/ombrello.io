import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Layout } from "@layout";
import { menuProps } from "@types";

import "@app/styles/global.scss";
import { getMenu } from "@app/api";

interface extendedAppProps extends AppProps {
  menu: menuProps;
}

function App({ Component, pageProps, menu }: extendedAppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s"
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            href: `/favicon/apple-touch-icon.png`,
            sizes: "180x180",
          },
          {
            rel: "icon",
            type: "image/png",
            href: `/favicon/favicon-32x32.png`,
            sizes: "32x32",
          },
          {
            rel: "icon",
            type: "image/png",
            href: `/favicon/favicon-16x16.png`,
            sizes: "16x16",
          },
          {
            rel: "manifest",
            href: `/favicon/site.webmanifest`,
          },
          {
            rel: "mask-icon",
            href: `/favicon/safari-pinned-tab.svg`,
            color: "#1a51a4",
          },
        ]}
        additionalMetaTags={[
          {
            name: "msapplication-TileColor",
            content: "#ffffff",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
      />

      {/* <Head>
        <link
          rel="preload"
          href="/fonts/wotfard/Italic/wotfard-regularitalic-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <link
          rel="preload"
          href="/fonts/wotfard/roman/wotfard-medium-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <link
          rel="preload"
          href="/fonts/wotfard/Italic/wotfard-mediumitalic-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <link
          rel="preload"
          href="/fonts/novela/novela-displayregular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <link
          rel="preload"
          href="/fonts/novela/novela-displayitalic-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="crossOrigin"
        />
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="03MwK0Tdb6IjR0ArGhEaOJ9O6JmMWCQ8"
        />
      </Head> */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.getInitialProps = async () => {
  const menu = await getMenu();

  return { menu };
};

export default App;
