//
//
//

const liveServer = require('live-server');
const path = require('path');

//
// constants //////////////////////////////////////////////////////////////////
//

const ROOT_DIR = path.resolve(__dirname);
const DIST_DIR = path.join(ROOT_DIR, 'dist');

//
// config /////////////////////////////////////////////////////////////////////
//

const config = {
  port: process.env.PORT || 8080,
  host: 'localhost',
  root: DIST_DIR,
  open: false,
  file: 'index.htm',
}

//
// start //////////////////////////////////////////////////////////////////////
//

liveServer.start(config);

