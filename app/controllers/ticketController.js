let services = require('../services'),
    helpers = require('../helpers'),
    config = require(`../config`);

class TicketController {

  show(req, res) {
    helpers.requestMid.request({
      req: req,
      res: res,
      url: `${config.checkoutApi}/tickets/${req.params.hash}`,
      cb: (apiError, apiRes, apiBody) => {
        res.render('ticket/show', {ticket: JSON.parse(apiBody)});
      }
    });
  }
}

module.exports = new TicketController();
