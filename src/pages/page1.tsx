import React from 'react';
import { Helmet } from 'react-helmet';
import { TextContent } from 'tamia';
export default () => {
    return (
        <>
            <Helmet title="Page 1" />
            <TextContent>
                <h1>Page 1 title</h1>
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
