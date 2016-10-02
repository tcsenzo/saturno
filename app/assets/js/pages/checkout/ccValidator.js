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
    $(this)[0].submit();
  }
  else {
    e.preventDefault();
  }
};

$.formUtils.addValidator({
    name : 'cc',
    validatorFunction : function(value, $el, config, language, $form) {
      var cc = new Moip.CreditCard({
        number: $form.find('.card-number').val(),
        cvc: $form.find('.card-cvc').val(),
        expMonth: $form.find('.card-exp-month').val(),
        expYear: $form.find('.card-exp-year').val(),
        pubKey: $form.find('.pub-key').val()
      });

      return cc.isValid();
    },
    errorMessage : 'Cartão de crédito inválido',
    errorMessageKey: 'badCcNumber'
});

module.exports = CcValidator;
