import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, TextContent } from 'tamia';

export default () => {
    return (
        <>
            <Helmet title="Home" />
            <TextContent>
                <h1>Page title</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quae et iusto aut eveniet labore quam rerum possimus
                    explicabo, beatae doloribus dolores. Laboriosam consectetur,
                    sapiente consequuntur velit illum corrupti? Fugit, sunt.
                </p>
            </TextContent>
        </>
    );
};
