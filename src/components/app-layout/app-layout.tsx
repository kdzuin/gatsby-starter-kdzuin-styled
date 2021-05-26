import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

import { Box, Flex, TamiaRoot } from 'tamia';
import theme from '../../theme';

import { Header } from 'components/header';
import { Footer } from 'components/footer';

interface AppLayoutProps {
    location?: Location;
}

const AppLayout: React.FunctionComponent<AppLayoutProps> = ({
    children,
    location,
}) => {
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            lang
                            title
                            titleTemplate
                            description
                        }
                    }
                }
            `}
            render={({
                site: {
                    siteMetadata: { lang, title, titleTemplate, description },
                },
            }) => (
                <>
                    <Helmet defaultTitle={title} titleTemplate={titleTemplate}>
                        <html lang={lang} />
                        <meta name="description" content={description} />
                        <link
                            rel="dns-prefetch"
                            href="//fonts.googleapis.com"
                        ></link>
                        <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com/"
                            crossOrigin={'crossorigin'}
                        ></link>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap"
                            rel="stylesheet"
                        ></link>
                    </Helmet>

                    <TamiaRoot theme={theme}>
                        <Flex flexDirection="column" alignItems="stretch">
                            <Box>
                                <Header location={location}></Header>
                            </Box>
                            {children}
                            <Box mt="auto" pt="l">
                                <Footer />
                            </Box>
                        </Flex>
                    </TamiaRoot>
                </>
            )}
        />
    );
};

export default AppLayout;
