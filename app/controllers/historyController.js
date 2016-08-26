let services = require('../services'),
    helpers = require('../helpers'),
    config = require(`../config`);

class HistoryController {

  index(req, res) {
    res.render("history/index");
  }
}

module.exports = new HistoryController();
