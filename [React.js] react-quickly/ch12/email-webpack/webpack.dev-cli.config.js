const webpack = require('webpack') // webpack 모듈 로드

module.exports = {
    entry: [
        './jsx/app.jsx',
    ],
    output: {
        publicPath: 'js/', // wds 경로 설정하여 bundle.js를 사용하도록 설정.(저장X)
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: []
            }
        ]
    }
}