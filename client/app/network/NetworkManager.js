//
//
//

import {w3cwebsocket as WebSocket} from 'websocket';

export default class NetworkManager {

  //
  // members //////////////////////////////////////////////////////////////////
  //

  app = null;

  //
  // constructor //////////////////////////////////////////////////////////////
  //

  constructor(app) {
    this.app = app;
    this.client = null;
    this.isConnected = false;
  }

  //
  // public methods ///////////////////////////////////////////////////////////
  //

  start() {
    this.client = new WebSocket('ws://localhost:8181', 'client');
    this.client.onerror = this._onError.bind(this);
    this.client.onopen = this._onConnect.bind(this);
    this.client.onclose = this._onClose.bind(this);
    this.client.onmessage = this._onMessage.bind(this);
  }

  //
  // --------------------------------------------------------------------------
  //

  send(msg) {
    if(this.isConnected) {
      const str = JSON.stringify(msg);
      console.log('sending message:',str);
      this.client.send(str);
    }
  }

  //
  // --------------------------------------------------------------------------
  //

  ping() {
    this.send({id: 'ping', time: new Date()});
  }

  //
  // --------------------------------------------------------------------------
  //

  update() {
  }

  //
  // private methods ----------------------------------------------------------
  //

  _route(msg) {
    console.log(msg);
  }

  //
  // --------------------------------------------------------------------------
  //

  _onError(err) {
    console.error(err);
  }

  //
  // --------------------------------------------------------------------------
  //

  _onConnect() {
    console.log('Connection Established');
    this.isConnected = true;
    this.ping();
  } 

  //
  // --------------------------------------------------------------------------
  //

  _onMessage(msg) {
    msg = JSON.parse(msg.data);
    this._route(msg);
  }

  //
  // --------------------------------------------------------------------------
  //

  _onClose() {
    console.log('Connection closed');
    this.isConnected = false;
  }

  //
  // end class ////////////////////////////////////////////////////////////////
  //
}
