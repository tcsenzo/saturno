function CcValidator() {
  this.$paymentForm = $('.payment-form');

  this.ccFields = {
    number: this.$paymentForm.find('.card-number'),
    cvc: this.$paymentForm.find('.card-cvc'),
    expMonth: this.$paymentForm.find('.card-exp-month'),
    expYear: this.$paymentForm.find('.card-exp-year'),
    hash: this.$paymentForm.find('.card-hash'),
    publicKey: this.$paymentForm.find('.pub-key')
  }

  this.binds();
};

CcValidator.prototype.binds = function () {
  this.$paymentForm.on('submit', {that: this}, this.onFormSubmit);
};

CcValidator.prototype.onFormSubmit = function(e) {
  var that = e.data.that,
      cc = new Moip.CreditCard({
        number: that.ccFields.number.val(),
        cvc: that.ccFields.cvc.val(),
        expMonth: that.ccFields.expMonth.val(),
        expYear: that.ccFields.expYear.val(),
        pubKey: that.ccFields.publicKey.val()
      });

  if(cc.isValid()){
    that.ccFields.hash.val(cc.hash());
    debugger
    $(this)[0].submit();
  }
  else {
    e.preventDefault();
    alert('Cartão de crédito inválido');
  }
};

module.exports = CcValidator;
