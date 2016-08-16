let services = require('../services'),
    cookie = require('cookie');

class LoginController {

  index(res) {
    res.render('login/index');
  }

  login(req, res) {
    services.login.login(req.body, (apiError, apiRes, apiBody) => {
      if(apiRes.statusCode === 200) {
        res.append('set-cookie', apiRes.headers['set-cookie'][0]);
        res.redirect('/');
      }
      else {
        res.render('login/index', {
          'alert': {
            'type': 'danger',
            'title': req.t('login.message.title'),
            'content': req.t('login.message.content')
          }
        });
      }
    });
  }

  logout(req, res) {
    req.session.authorizedUser = false;
    res.redirect('/');
  }
}

module.exports = new LoginController();
