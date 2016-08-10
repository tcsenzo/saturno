let services = require('../services');

class ProfileController {

  index(req, res) {
    res.render("profile/index");
  }

}

module.exports = new ProfileController();
