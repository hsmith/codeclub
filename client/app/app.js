//
//
//

import RenderManager from './render/RenderManager';
import NetworkManager from './network/NetworkManager';
import Config from './config';

export default class Application
{
  //
  // members //////////////////////////////////////////////////////////////////
  //
  
  config = Config;
  networkManager = null;
  renderManager = null;
  ticker = null;

  //
  // constructor //////////////////////////////////////////////////////////////
  //

  constructor() {
    const appElement = document.getElementById('app');
    this.renderManager = new RenderManager(this, appElement);
    this.networkManager = new NetworkManager(this);
  }

  //
  // public methods ///////////////////////////////////////////////////////////
  //

  start() {
    this.networkManager.start();
    this.renderManager.start();

    this.ticker = new PIXI.ticker.Ticker();
    this.ticker.add(this._update, this, PIXI.UPDATE_PRIORITY.NORMAL)
    this.ticker.start();
  }

  //
  // private methods //////////////////////////////////////////////////////////
  //

  _update(dt) {
    this.networkManager.update();
    this.renderManager.update();
  }

  //
  // end class ////////////////////////////////////////////////////////////////
  //
}
