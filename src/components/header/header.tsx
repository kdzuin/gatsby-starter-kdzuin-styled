import React from 'react';
import { Box, Container, Heading, Stack } from 'tamia';
import { Link } from 'tamia-gatsby-link';

import { Menu } from 'components/menu';

interface HeaderProps {
    location?: Location;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ location }) => {
    return (
        <Container>
            <Stack
                gap={'m'}
                direction={['column', 'column', 'row']}
                justifyContent={'space-between'}
                alignItems={'baseline'}
                py={'m'}
            >
                <Box>
                    <Heading level={3} as="div">
                        <Link href="/">Gatsby Starter</Link>
                    </Heading>
                </Box>
                <Box>
                    <Menu location={location} />
                </Box>
            </Stack>
        </Container>
    );
};
