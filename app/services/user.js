let request = require(`request`),
    config = require(`../config`);

class Events {
  static create(cb) {
    request.get(`${config.theaterEventsApi}/events`, (error, response, body) => {
      cb(error, response, body);
    });
  }
}

module.exports = Events;
