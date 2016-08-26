let services = require('../services'),
    helpers = require('../helpers'),
    config = require(`../config`);

class TicketController {

  show(req, res) {
    let ticketsJSON = JSON.parse(decodeURIComponent(req.query.showTicketsJSON));
    res.render('ticket/show', {ticket: ticketsJSON});
    // helpers.requestMid.request({
    //   req: req,
    //   res: res,
    //   url: `${config.checkoutApi}/tickets/${req.params.hash}`,
    //   cb: (apiError, apiRes, apiBody) => {
    //     res.render('ticket/show', {ticket: ticketJSON});
    //   }
    // });
  }
}

module.exports = new TicketController();
