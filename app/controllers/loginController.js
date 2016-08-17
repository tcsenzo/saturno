//let //services = require('../services'),
    //cookie = require('cookie'),
let helpers = require('../helpers'),
    config = require(`../config`);

class LoginController {

  index(res) {
    res.render('login/index');
  }

  login(req, res) {
    helpers.requestMid.request({
      url: `${config.theaterEventsApi}/login?email=${req.body.email}&password=${req.body.password}`,
      method: 'POST',
      req: req,
      res: res,
      cb: (apiError, apiRes, apiBody) => {
        if(apiRes.statusCode === 200) {
          res.append('set-cookie', apiRes.headers['set-cookie'][0]);
          res.redirect('/perfil');
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
      }
    });
  }

  logout(req, res) {
    res.clearCookie('JSESSIONID');
    res.redirect('/');
  }
}

module.exports = new LoginController();
