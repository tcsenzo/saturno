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

  create(req, res) {
    let jsonTemplate = {
      "name": "GUAIANAZESSSS",
      "description": "Um evento para toda a familia",
      "price": "22.0",
      "available_quantity": 20,
      "scheduled_date": "2017-12-03T10:15:30",
      "theater": {
        "name": "Teatro NET SP",
        "address": {
            "street": "Rua Olimpíadas",
            "number": "360",
            "district": "Vila Olimpia",
            "city": "São Paulo",
            "state": "SP",
            "country": "Brasil",
            "zip_code": "04551-000"
        }
      }
    };


    helpers.requestMid.request({
      req: req,
      res: res,
      method: 'POST',
      url: `${config.theaterEventsApi}/events/`,
      jsonParams: jsonTemplate,
      cb: (apiError, apiRes, apiBody) => {
        console.log('====================== ACHO QUE FOI =========================')
      }
    });
  }
}

module.exports = new EventController();
