class Auth {
  authorize(req, res, next) {
    if(req.session.authorizedUser) {
      next();
    }
    else {
      res.redirect('/acesso-negado');
    }
  }
}

module.exports = new Auth();
