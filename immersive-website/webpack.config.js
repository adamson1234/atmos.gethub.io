const path = require('path');

module.exports = {
    entry: './src/assets/js/scripts.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(glb|gltf)$/,
                use: 'file-loader',
            },
            {
                test: /\.(html)$/,
                use: 'html-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.html'],
    },
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
    },
};