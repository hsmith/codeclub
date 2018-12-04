//
//
//

const path = require('path');

//
// constants //////////////////////////////////////////////////////////////////
//

const ROOT_DIR = path.resolve(__dirname);
const SRC_DIR  = path.join(ROOT_DIR, 'src');

//
// configuration //////////////////////////////////////////////////////////////
//

const DefaultConfiguration = {

  //
  // entry point --------------------------------------------------------------
  //
  
  entry: [
    './src/index.js'
  ],

  //
  // mode ---------------------------------------------------------------------
  //

  mode: process.env.NODE_ENV,

  //
  // outputs ------------------------------------------------------------------
  //

  output: {
    filename: 'index.js',
    path: ROOT_DIR,
    library: 'common',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },

  //
  // modules ------------------------------------------------------------------
  //

  module: {
    //
    // rules ------------------------------------------------------------------
    //
    rules: [
      //
      // babel transpilation --------------------------------------------------
      //
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  //
  //
  //
  resolve: {
    modules: [
      SRC_DIR,
      'node_modules'
    ],
    alias: {
    }
  },

  //
  // end configuration --------------------------------------------------------
  //
}


//
// exports ////////////////////////////////////////////////////////////////////
//

module.exports = DefaultConfiguration;
