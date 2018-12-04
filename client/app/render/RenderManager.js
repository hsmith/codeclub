//
//
//

import * as PIXI from 'pixi.js';

export default class RenderManager {

  //
  // members //////////////////////////////////////////////////////////////////
  //

  app = null;
  root = null;
  pixi = null;
  layers = {};
  
  //
  // constructor //////////////////////////////////////////////////////////////
  //

  constructor(app, root) {
    this.app = app;
    this.root = root;
  }

  //
  // public methods ///////////////////////////////////////////////////////////
  //

  start() {
    const bounds = this._getBounds(); 
    
    const config = {...this.app.config.pixi.init, width: bounds.width, height: bounds.height};
    this.pixi = new PIXI.Application(config);

    console.log(bounds);
    
    // build layers
    const self = this;
    let lastContainer = this.pixi.stage;
    this.app.config.pixi.layers.forEach((name,index)=>{
      const newLayer = new PIXI.Container();
      lastContainer.addChild(newLayer)
      lastContainer = newLayer;
      this.layers[name] = newLayer;
    });

    // add our view into the DOM
    this.root.appendChild(this.pixi.view);

    // get a callback whenever the window resizes
    window.addEventListener('resize', this._onWindowResize.bind(this));
    this._onWindowResize();
  }

  //
  // --------------------------------------------------------------------------
  //

  update() {
  }

  //
  // private methods //////////////////////////////////////////////////////////
  //

  _getBounds() {
    const rect = this.root.getBoundingClientRect();
    return new PIXI.Rectangle(rect.left, rect.top, rect.width, rect.height);
  }

  //
  // --------------------------------------------------------------------------
  //

  _onWindowResize() {
    const bounds = this._getBounds();
    this.pixi.renderer.resize(bounds.width, bounds.height);
  }

  //
  // end class ////////////////////////////////////////////////////////////////
  //
}
