class CcValidator {
  constructor() {
    let $paymentForm = $('.payment-form');
    this.ccFields = {
      number: $paymentForm.find('.card-number'),
      cvc: $paymentForm.find('.card-cvc'),
      expMonth: $paymentForm.find('.card-exp-month'),
      expYear: $paymentForm.find('.card-exp-year'),
      hash: $paymentForm.find('.card-hash'),
      publicKey: $paymentForm.find('.pub-key')
    }

    $paymentForm.on('submit', {that: this}, this.onFormSubmit);
  }

  onFormSubmit(e) {
    let that = e.data.that,
        cc = new Moip.CreditCard({
          number: that.ccFields.number.val(),
          cvc: that.ccFields.cvc.val(),
          expMonth: that.ccFields.expMonth.val(),
          expYear: that.ccFields.expYear.val(),
          pubKey: that.ccFields.publicKey.val()
        });

    debugger
    if(cc.isValid()){
      console.log('valido', cc.hash());
      that.ccFields.hash.val(cc.hash());
      //$(this).submit();
    }
    else {
      alert('Cartão de crédito inválido');
    }
  }
}

module.exports = CcValidator;
