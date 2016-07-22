let services = require(`../services`),
    _ = require(`underscore`);

class Index {

  index(res) {
    let filters = {},
        finished = {},
        that = this;

    finished = _.after(3, () => {
      that.doRender(res, filters);
    });

    services.events.all((error, response, body) => {
      filters.fiveHours = JSON.parse(body).events;
      finished();
    });

    services.events.all((error, response, body) => {
      filters.eightHours = JSON.parse(body).events;
      finished();
    });

    services.events.all((error, response, body) => {
      filters.twelveHours = JSON.parse(body).events;
      finished();
    });
  }

  doRender(res, filters) {
    res.render("index/index", { "filters": filters });
  }

}

module.exports = new Index();
