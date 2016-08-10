let services = require('../services');

class LoginController {

  index(res) {
    res.render("login/index");
  }
}

module.exports = new LoginController();
