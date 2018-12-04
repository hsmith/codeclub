//
//
//

//
// presets ////////////////////////////////////////////////////////////////////
//

const presets = [
  "@babel/preset-env",
];

//
// plugins ////////////////////////////////////////////////////////////////////
//

const plugins = [
  "@babel/plugin-proposal-class-properties",
];

//
// exports ////////////////////////////////////////////////////////////////////
//

module.exports = function(api) {
  api.cache(()=>process.env.NODE_ENV === 'production');
  return {
    presets,
    plugins
  };
}
