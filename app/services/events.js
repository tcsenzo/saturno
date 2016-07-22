let request = require(`request`);

class Events {
  static all(cb) {
    request.get('http://localhost:8080/events', (error, response, body) => {
      cb(error, response, body);
    });
  }
}

module.exports = Events;
