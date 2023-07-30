const { name } = require('ejs')
const pkg = require('./package.json')
const path = require('path')
const libraryName = pkg.name

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, './src/index.tsx'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    library: {
      type: 'umd',
      name: libraryName,
    },
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true,
    globalObject: `typeof self !== 'undefined' ? self : this`,
  },
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  node: false,
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'react-easy-swipe': 'react-easy-swipe',
  },
}
