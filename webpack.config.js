const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: 'development',

    entry: path.resolve( __dirname, 'src', 'js', 'client', 'index.js' ),

    output: {
        filename: 'main.js',
        path: path.resolve( __dirname, 'dist' ),
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ],
            },
        ],
    },

    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Starter',
            template: './src/html/template.html',
            sendoff: 'Thanks',
            appContainerClass: "app-container",
            appElementID: "app-target"
        }),
    ],

    devtool: 'inline-source-map',
};