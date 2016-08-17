let services = require('../services'),
    config = require('../config'),
    helpers = require('../helpers');

class EventController {

  show(req, res) {
    helpers.requestMid.request({
      req: req,
      res: res,
      url: `${config.theaterEventsApi}/events/${req.params.id}`,
      method: 'GET',
      cb: (apiError, apiRes, apiBody) => {
        if(apiRes.statusCode === 200) {
          res.render("event/show", {'event': JSON.parse(apiBody)});
        }
      }
    });
  }

}

module.exports = new EventController();
