const webpack = require('webpack') // webpack 모듈 로드

module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080', // 진입점에 wds 추가
        './jsx/app.jsx'
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
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['react-hot-loader', 'babel-loader'] // 모든 jsx파일에서 HMR 할성화
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()] // HMR 플러그인 추가
}