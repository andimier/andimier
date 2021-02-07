var path = require('path');

module.exports  = {
    entry: './js/components/home-page.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
