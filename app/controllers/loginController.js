//let //services = require('../services'),
    //cookie = require('cookie'),
let helpers = require('../helpers'),
    config = require(`../config`),
    cookie = require('cookie');

class LoginController {

  index(res) {
    res.render('login/index');
  }

  login(req, res) {
    let that = this;
    helpers.requestMid.request({
      url: `${config.authApi}/login?email=${req.body.email}&password=${req.body.password}`,
      method: 'POST',
      req: req,
      res: res,
      cb: (apiError, apiRes, apiBody) => {
        if(apiRes.statusCode === 200) {
          res.append('set-cookie', apiRes.headers['set-cookie'][0]);
          let loginHashCookie = cookie.parse(apiRes.headers['set-cookie'][0]);
          req.headers.cookie += '; JSESSIONID=' + loginHashCookie.JSESSIONID;
          that.getUsername(req, res);
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

  getUsername(req, res) {
    helpers.requestMid.request({
      req: req,
      res: res,
      url: `${config.authApi}/users`,
      cb: (apiError, apiRes, apiBody) => {
        if(apiRes.statusCode === 200) {
          let loggedUser = JSON.parse(apiBody);
          req.headers.cookie += '; qettalLoggedUser=' + loggedUser.name;
          res.cookie('qettalLoggedUser', loggedUser.name);
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
