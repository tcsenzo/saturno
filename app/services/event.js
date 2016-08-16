let request = require(`request`),
    config = require(`../config`);

class Event {
  static all(cb) {
    request.get(`${config.theaterEventsApi}/events`, (error, response, body) => {
      cb(error, response, body);
    });
  }

  static getById(id, cb) {
    request.get(`${config.theaterEventsApi}/events/${id}`, (error, response, body) => {
      cb(error, response, body);
    });
  }
}

module.exports = Event;
