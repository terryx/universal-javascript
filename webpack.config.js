const Path = require('path');

module.exports = {
    entry: Path.join(__dirname, './client.js'),
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'client.js',
        path: Path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(jsx||js)$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
