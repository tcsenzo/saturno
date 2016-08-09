let request = require(`request`),
    config = require(`../config`);

class Users {
  static create(params, cb) {
    request.post({ url: `${config.theaterEventsApi}/users`, json: params}, (error, response, body) => {
      cb(error, response, body);
    });
  }
}

module.exports = Users;
