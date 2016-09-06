let services = require(`../services`),
    config = require(`../config`),
    helpers = require('../helpers');

class Index {

  index(req, res) {
    let that = this;

    helpers.requestMid.request({
      req: req,
      res: res,
      url: `${config.theaterEventsApi}/events`,
      cb: (apiError, apiRes, apiBody) => {
        if(apiRes.statusCode === 200) {
          let events = apiBody === '' ? {} : JSON.parse(apiBody).events;
          res.render("index/index", { "events": events });
        }
      }
    });
  }
}

module.exports = new Index();
