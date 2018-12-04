//
//
//

const path = require('path');

//
// constants //////////////////////////////////////////////////////////////////
//

const ROOT_DIR = path.resolve(__dirname);
const DIST_DIR = path.join(ROOT_DIR, 'dist');

//
// configuration //////////////////////////////////////////////////////////////
//

const DefaultConfiguration = {

  //
  // entry point --------------------------------------------------------------
  //
  
  entry: [
    './app/index.js'
  ],

  //
  // mode ---------------------------------------------------------------------
  //

  mode: process.env.NODE_ENV,

  //
  // outputs ------------------------------------------------------------------
  //

  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
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
  // dev server ---------------------------------------------------------------
  //
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    open: true,
    index: 'index.htm',
    port: 8080,
  }

  //
  // end configuration --------------------------------------------------------
  //
}


//
// exports ////////////////////////////////////////////////////////////////////
//

module.exports = DefaultConfiguration;