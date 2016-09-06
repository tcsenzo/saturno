let services = require('../services'),
    helpers = require('../helpers'),
    config = require(`../config`);

class HistoryController {

  index(req, res) {
    helpers.requestMid.request({
      req: req,
      res: res,
      url: `${config.checkoutApi}/history`,
      cb: (apiError, apiRes, apiBody) => {
        res.render("history/index", {'history': JSON.parse(apiBody)});
      }
    });
  }
}

module.exports = new HistoryController();
