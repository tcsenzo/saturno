let services = require('../services');

class EventController {

  show(req, res) {
    services.event.getById(1, (apiError, apiResp, apiBody) => {
      if(apiResp.statusCode === 200) {
        res.render("event/show", {'event': apiBody});
      }
    });
  }

}

module.exports = new EventController();
