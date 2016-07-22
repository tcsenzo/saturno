let services = require(`../services`);

class Index {
  static index(res) {
    services.events.all((error, response, body) => {
      res.render('index/index', JSON.parse(body));
    });
  }
}

module.exports = Index;
