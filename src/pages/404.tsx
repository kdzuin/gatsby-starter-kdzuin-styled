import React from 'react';
import { Helmet } from 'react-helmet';
import { TextContent } from 'tamia';

export default () => {
    return (
        <>
            <Helmet title="Not Found" />
            <TextContent>
                <h1>Page not found</h1>
                <p>Sorry we couldn’t find what you were looking for.</p>
            </TextContent>
        </>
    );
};
