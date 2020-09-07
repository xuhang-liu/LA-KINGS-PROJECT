const path = require("path");
const webpack = require("webpack");
const basePath = path.resolve(__dirname);
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  context: path.join(basePath, "src"),
  node: {
    fs: "empty",
  },
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/dist",
  },
  devServer: {
    contentBase: basePath,
    watchContentBase: true,
  },
  resolve: {
    alias: {
      videojs: "video.js",
      WaveSurfer: "wavesurfer.js",
      RecordRTC: "recordrtc",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      videojs: "video.js/dist/video.cjs.js",
      RecordRTC: "recordrtc",
    }),
    new CompressionPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 200 * 1024, // in bytes
            },
          },
        ],
      },
    ],
  },
};

// Allow webpack to transpile the code into javascript
