//
//
//

module.exports = {
  echo: function(conn, msg) {
    console.log(msg);
    if(conn != undefined) {
      conn.sendJson(msg);
    }
  },

  ping: function(conn, msg) {
    console.log(msg);
    conn.sendJson({id: 'tim is the best'});
  }
}
