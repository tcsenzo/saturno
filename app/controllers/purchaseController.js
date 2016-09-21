let helpers = require('../helpers'),
    config = require(`../config`);

class PurchaseContoller {

  show(req, res) {
    helpers.requestMid.request({
      req: req,
      res: res,
      url: `${config.checkoutApi}/history/${req.params.purchaseId}`,
      cb: (apiError, apiRes, apiBody) => {
        if(apiRes.statusCode === 200) {
          let purchase = JSON.parse(apiBody);

          switch (purchase.payment_status) {
            case "APPROVED":
              res.render('ticket/show', {'ticket': purchase})
              break;

            default:
              //res.render('ticket/show', {'ticket': purchase})
              res.render('purchase/show', { 'purchase': JSON.parse(apiBody) });
              break;
          }
        }
      }
    });
  }
}

module.exports = new PurchaseContoller();
