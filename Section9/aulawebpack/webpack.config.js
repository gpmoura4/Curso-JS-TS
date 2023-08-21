const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        // pegando o caminho do arquivo publico q o user vai ver (bundle.js)
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            }
        ],
    },
    devtool: 'source-map'
};