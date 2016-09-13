let helpers = require('../helpers'),
    config = require(`../config`);

class PurchaseContoller {

  show(req, res) {
    res.render("purchase/show");
  }
}

module.exports = new PurchaseContoller();
