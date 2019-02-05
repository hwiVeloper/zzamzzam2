module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: __dirname + "/public/js/",
    filename: "app.js"
  },
  devtool: "#sourcemap",
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [
      {
        teset: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  }
};
