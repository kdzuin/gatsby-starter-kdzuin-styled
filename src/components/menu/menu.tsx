import React from 'react';
import { Stack, Box } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import styled from 'styled-components';

type MenuProps = {
    location?: Location;
};

type Item = {
    title: string;
    hint?: string;
    href: string;
};

const ITEMS: Item[] = [
    {
        title: 'Page 1',
        href: '/page1/',
    },
    {
        title: 'Page 2',
        href: '/page2/',
    },
    {
        title: 'Page 3',
        href: '/page3/',
    },
    {
        title: 'Page 4',
        href: '/page4/',
    },
];

const MenuLink = styled(Link)({
    '&, &:link': { textDecoration: 'none' },
    '&[aria-current]': { textDecoration: 'underline' },
    '&:hover': { textDecoration: 'underline' },
});

export const Menu: React.FunctionComponent<MenuProps> = () => {
    return (
        <Stack direction={['column', 'row']}>
            {ITEMS.map(({ title, hint, href }) => (
                <Box key={href}>
                    <MenuLink href={href} title={hint} aria-label={hint}>
                        {title}
                    </MenuLink>
                </Box>
            ))}
        </Stack>
    );
};
