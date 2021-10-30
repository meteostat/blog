module.exports = {
  title: 'Meteostat Insights',
  base: '/',
  description: 'The Weather’s Record Keeper.',
  logo: './assets/img/logo.png',
  head: [
    ['meta', { name: 'theme-color', content: '#0678BE' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://media.meteostat.net/favicon-16x16.png' }],
    ['meta', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://media.meteostat.net/favicon-32x32.png' }],
    ['meta', { rel: 'icon', href: 'https://media.meteostat.net/icon.svg' }],
    ['script', {
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6830849181977374',
      crossorigin: 'anonymous'
    }]
  ],
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
        name: 'Christian Lamprecht',
        avatar: 'https://avatars.githubusercontent.com/u/12759785?s=64&v=4',
        link: 'https://www.linkedin.com/in/clampr/',
        linktext: 'LinkedIn',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/meteostat',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/company/meteostat',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/meteost',
        },
        {
          type: 'web',
          link: 'https://meteostat.net',
        }
      ],
      copyright: [
        {
          text: 'Copyright © Meteostat',
          link: 'https://meteostat.net',
        }
      ],
    },
    sitemap: {
      hostname: 'https://blog.meteostat.net/'
    },
    feed: {
      canonical_base: 'https://blog.meteostat.net/',
    },
    smoothScroll: true
  }
}
