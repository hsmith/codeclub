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
    this.pixi = new PIXI.Application({
      width: bounds.width, 
      height: bounds.height,
      backgroundColor: 0x2c2c2c
    })

    console.log(bounds);
    
    // build layers
    const self = this;
    let lastContainer = this.pixi.stage;
    this.app.config.layers.forEach((name,index)=>{
      const newLayer = new PIXI.Container();
      lastContainer.addChild(newLayer)
      lastContainer = newLayer;
      this.layers[name] = newLayer;
    });

    // add our view into the DOM
    this.root.appendChild(this.pixi.view);
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
    return new PIXI.Rectangle(rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top);
  }

  //
  // end class ////////////////////////////////////////////////////////////////
  //
}
