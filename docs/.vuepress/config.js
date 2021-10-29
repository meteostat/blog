module.exports = {
  title: 'Meteostat Insights',
  base: '/',
  description: 'The Weather’s Record Keeper.',
  logo: './assets/img/logo.png',
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
      hostname: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/'
    },
    feed: {
      canonical_base: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    },
    smoothScroll: true
  },
}
