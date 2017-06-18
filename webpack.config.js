const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
        'vendor': ['./src/polyfills', './src/vendor'],
        'app': './src/main',
        'tests': './src/tests'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "dist/"
    },
    resolve: {
        extensions: ['.ts', '.js', '.jpg', '.jpeg', '.gif', '.png', '.css', '.html']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'awesome-typescript-loader'
                },
                {
                    loader: 'angular2-template-loader'
                }]
            },
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loaders: ['html-loader'] },
        ]
    },
    plugins: [
    ]
};
