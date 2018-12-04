//
//
//

const Config = {
  pixi: {
    init: {
      backgroundColor: 0x222222,
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
