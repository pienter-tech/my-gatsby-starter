require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `My Site`,
    siteUrl: `https://www.mysite.be`,
    description: `My beautiful site`,
    author: `Korneel Eeckhout`,
    menuItems: [
      {
        name: 'home',
        link: '/',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: process.env.GOOGLE_ANALYTICS, anonymize: true },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: { exclude: ['/404/'] },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.MANIFEST_NAME,
        short_name: process.env.MANIFEST_SHORT_NAME,
        start_url: process.env.MANIFEST_START_URL,
        background_color: process.env.MANIFEST_BGC,
        theme_color: process.env.MANIFEST_THEME_COLOR,
        display: process.env.MANIFEST_DISPLAY,
        icon: process.env.MANIFEST_ICON,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
  ],
};
