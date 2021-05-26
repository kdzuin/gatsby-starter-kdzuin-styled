import { GatsbyConfig } from 'gatsby';

const siteMetadata: GatsbyConfig['siteMetadata'] = {
    title: 'Gatsby Starter',
    titleTemplate: '%s — Gatsby Starter',
    siteUrl: `https://www.example.com`,
    lang: 'en',
    description: 'Gatsby Starter Description',
    author: 'Konstantin Dzuin',
};

module.exports = {
    siteMetadata,
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'static/apple-touch-icon.png',
            },
        },
        'gatsby-plugin-typescript',
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve(
                    './src/components/app-layout/app-layout.tsx'
                ),
            },
        },
    ],
};
