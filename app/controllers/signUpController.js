let services = require('../services');

class SignUpController {

  index(res) {
    res.render("signUp/index");
  }

  create(req, res) {
    services.users.create(req.body, (error, response, body) => {
      if(response.statusCode === 201 && !error) {
        res.render('signUp/index', {
          'alert': {
            'type': 'success',
            'title': req.t('signup.message.title'),
            'content': req.t('signup.message.content')
          }
        })
      }
    });
  }

}

module.exports = new SignUpController();
