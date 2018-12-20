//
//
//

const Config = {
  pixi: {
    init: {
      backgroundColor: 0x00ff22,
      autoResize: true,
      resolution: devicePixelRatio
    },
    layers: [
      'BACKGROUND',
      'BACKGROUND_DETAIL',
      'MAIN',
      'FOREGROUND',
      'OVERLAY',
      'UI'
    ],
  }
};

export default Config;
