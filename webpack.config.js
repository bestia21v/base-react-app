const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.[fullhash].js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    resolve: {
        alias: {
            './': path.resolve(__dirname, 'src'),
        },
        extensions: ["*", ".js", ".ts", ".tsx"],
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve('assets', 'index.html')
        }),
        new CopyPlugin({
            patterns: [
                { from: "assets/favicon.ico", to: "" }
            ],
        }),
    ],
};
