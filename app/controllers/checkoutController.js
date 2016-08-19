class CheckoutController {
  index(req, res) {
    let ticketSum = {},
        totalValue = 0,
        checkoutJSON = {
          'event': JSON.parse(req.query.event),
          'items': [],
          'total': totalValue
        };

    // soma a quantidade de tickets vindos do request
    for(let [index, elem] of req.query.ticketType.entries()) {
      let amount = parseInt(req.query.ticketAmount[index]);
      ticketSum[elem] = ticketSum[elem] ? ticketSum[elem] + amount : amount;
    }

    // organiza os itens no checkoutJSON
    for (const key in ticketSum) {
      let ticketPrice = parseFloat(checkoutJSON.event.price),
          unitPrice = key === 'FULL' ? ticketPrice : ticketPrice/2,
          ticketType = key,
          quantity = ticketSum[key],
          amountPrice = quantity*unitPrice;

      checkoutJSON.items.push({
        'type': ticketType,
        'quantity': quantity,
        'unitPrice': unitPrice,
        'amountPrice': amountPrice
      });

      totalValue += amountPrice;
    }

    checkoutJSON.total = totalValue;
    res.render('checkout/index', {checkout: checkoutJSON});
  }

  payment(req, res) {
    console.log(req.body);
  }
}

module.exports = new CheckoutController();
