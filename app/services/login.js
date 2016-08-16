let request = require(`request`),
    config = require(`../config`);

class Login {
  static login(params, cb) {
    request.post(`${config.theaterEventsApi}/login?email=${params.email}&password=${params.password}`, (error, response, body) => {
      cb(error, response, body);
    });
  }

  static teste(cookie, cb) {
    let jsonTemplate = {
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

    request.post({
        url: `${config.theaterEventsApi}/theaters`, json: jsonTemplate,
        headers: {
          'cookie': cookie
        }
      }, (error, response, body) => {
      cb(error, response, body);
    });
  }
}

module.exports = Login;
