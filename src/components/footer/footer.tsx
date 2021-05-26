import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Text } from 'tamia';

interface FooterProps {}

const YEAR = new Date().getFullYear();

export const Footer: React.FunctionComponent<FooterProps> = () => {
    return (
        <Container>
            <StaticQuery
                query={graphql`
                    query AuthorInfo {
                        site {
                            siteMetadata {
                                author
                            }
                        }
                    }
                `}
                render={({
                    site: {
                        siteMetadata: { author },
                    },
                }) => (
                    <Text variant="small" color="mono.grayDark">
                        &copy; {author}, {YEAR}
                    </Text>
                )}
            />
        </Container>
    );
};
