export default {
    title: 'Ombrello',
    titleTemplate: '%s | Ombrello',
    description: 'We combine years of experience and award winning implementations with being genuinely nice people.',
    openGraph: {
      title: 'Ombrello',
      description: 'We combine years of experience and award winning implementations with being genuinely nice people.',
      type:"website",
      url: 'https://ombrello.io',
      images: [{
        url: '/images/social.jpg',
        width: 1200,
        height:630,
        alt: 'ombrello.io'
      }]
    },
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        href: `/favicon/apple-touch-icon.png`,
        sizes: '180x180',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `/favicon/favicon-32x32.png`,
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `/favicon/favicon-16x16.png`,
        sizes: '16x16',
      },
      {
        rel: 'manifest',
        href: `/favicon/site.webmanifest`,
      },
      {
        rel: 'mask-icon',
        href: `/favicon/safari-pinned-tab.svg`,
        color: '#1a51a4',
      },
    ],
    additionalMetaTags: [
      {
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ]
  };