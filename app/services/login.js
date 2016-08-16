let request = require(`request`),
    config = require(`../config`);

class Login {
  static login(params, cb) {
    request.post(`${config.theaterEventsApi}/login?email=${params.email}&password=${params.password}`, (error, response, body) => {
      cb(error, response, body);
    });
  }
}

module.exports = Login;
