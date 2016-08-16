let cookie = require('cookie');

class Auth {
  authorize(req, res, next) {
    let reqCookie = cookie.parse(req.headers.cookie);
    if(reqCookie.JSESSIONID) {
      next();
    }
    else {
      res.redirect('/acesso-negado');
    }
  }
}

module.exports = new Auth();
