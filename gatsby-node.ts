import path from 'path';
import { GatsbyNode } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
    actions,
}) => {
    actions.setWebpackConfig({
        // Turn off source maps
        devtool: false,
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    });
};
