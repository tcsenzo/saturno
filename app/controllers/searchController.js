let helpers = require('../helpers'),
    config = require('../config');

class SearchController {
  index(req, res) {
    helpers.requestMid.request({
      req: req,
      res: res,
      url: `${config.theaterEventsApi}/events?q=${req.query.q}`,
      cb: (apiError, apiRes, apiBody) => {
        if(apiRes.statusCode === 200) {
          res.render('search/index', {'events': JSON.parse(apiBody).events});
        }
      }
    });
  }
}

module.exports = new SearchController();
