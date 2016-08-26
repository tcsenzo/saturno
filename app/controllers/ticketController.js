let services = require('../services'),
    helpers = require('../helpers'),
    config = require(`../config`);

class TicketController {

  show(req, res) {
    let ticketsJSON = JSON.parse(decodeURIComponent(req.query.showTicketsJSON));
    res.render('ticket/show', {ticket: ticketsJSON});
  }
}

module.exports = new TicketController();
