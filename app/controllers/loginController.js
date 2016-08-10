let services = require('../services');

class LoginController {

  index(res) {
    res.render('login/index');
  }

  login(req, res) {
    req.session.authorizedUser = {
      'name': 'Gustavo Melo'
    };
    res.redirect('/');
  }

  logout(req, res) {
    req.session.authorizedUser = false;
    res.redirect('/');
  }
}

module.exports = new LoginController();
