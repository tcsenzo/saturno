let helpers = require('../helpers'),
    config = require('../config'),
    moment = require('moment');

class CheckoutController {
  index(req, res) {
    let ticketSum = {},
        totalValue = 0,
        checkoutJSON = {
          'event': JSON.parse(unescape(req.query.event).replace('+', ' ')),
          'items': [],
          'total': totalValue
        };

    // soma a quantidade de tickets vindos do request
    for(let [index, elem] of req.query.ticketType.entries()) {
      let amount = parseInt(req.query.ticketAmount[index]);
      ticketSum[elem] = ticketSum[elem] ? ticketSum[elem] + amount : amount;
    }

    // organiza os itens no checkoutJSON
    for(const key in ticketSum) {
      let ticketPrice = parseFloat(checkoutJSON.event.price),
          unitPrice = key === 'FULL' ? parseFloat(checkoutJSON.event.price) : parseFloat(checkoutJSON.event.half_price),
          ticketType = key,
          quantity = ticketSum[key],
          amountPrice = quantity*unitPrice;

      checkoutJSON.items.push({
        'ticket_type': ticketType,
        'quantity': quantity,
        'unitPrice': unitPrice,
        'amountPrice': amountPrice
      });

      totalValue += amountPrice;
    }

    checkoutJSON.total = totalValue;
    res.render('checkout/index', {checkout: checkoutJSON});
  }

  checkout(req, res) {
    this.formDataUglify(req);
    this.createPurchase(req, res);
  }

  createPurchase(req, res) {
    let purchase = JSON.parse(req.body.checkout),
        that = this;

    purchase = this.orderPurchaseObj(purchase);

    helpers.requestMid.request({
      req: req,
      res: res,
      url: `${config.checkoutApi}/purchases`,
      method: 'POST',
      jsonParams: purchase,
      cb: (apiError, apiRes, apiBody) => {
        if(apiRes.statusCode === 201) {
          that.createPayment(req, res, apiBody.id);
        }
      }
    });
  }

  createPayment(req, res, purchaseId) {
    let that = this,
        payment = {
          "credit_card_hash": req.body.cardHash,
          "full_name": req.body.fullName,
          "birth_date": req.body.birthDate,
          "phone_area_code": req.body.phoneArea,
          "phone": req.body.phone,
          "cpf": req.body.cpf,
          "purchase_id": purchaseId
        };

    helpers.requestMid.request({
      req: req,
      res: res,
      url: `${config.checkoutApi}/payments`,
      method: 'POST',
      jsonParams: payment,
      cb: (apiError, apiRes, apiBody) => {
        if(apiRes.statusCode === 200) {
          res.render('checkout/success', {'purchaseId': purchaseId});
        }
      }
    });
  }

  formDataUglify(req) {
    var cleanPhone = req.body.phone.replace(/\D/g, '');

    req.body.birthDate = moment(req.body.birthDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
    req.body.phoneArea = cleanPhone.substring(2, 0);
    req.body.phone = cleanPhone.substring(2);
    req.body.cpf = req.body.cpf.replace(/\.|\-/g, '');
  }


  orderPurchaseObj(purchase) {
    purchase['event_id'] = purchase.event.id;

    purchase.items.forEach((ticket) => {
      delete ticket.unitPrice;
      delete ticket.amountPrice;
    });

    delete purchase.total;
    delete purchase.event;

    return purchase;
  }
}

module.exports = new CheckoutController();
