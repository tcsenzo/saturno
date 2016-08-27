function DynamicFields() {
  this.ticketOptionIndex = 0;
  this.$template = $('.dynamic-field-template');
  if(this.$template.length < 1) {
    return false;
  }

  this.binds();
}

DynamicFields.prototype.binds = function() {
  this.$template.find('.add-field').on('click', {that: this}, this.onAddField);
  $('.buy-ticket-form').on('click', '.remove-field', this.onRemoveField);
}

DynamicFields.prototype.onAddField = function(e) {
  var that = e.data.that,
      clone = that.$template.clone();

  ++that.ticketOptionIndex;

  clone.removeClass('dynamic-field-template').
        find('.remove-field').
        removeClass('hidden');

  clone.find('.add-field').
        addClass('hidden');

  clone.find('.ticket-type-radio:first').
        attr('checked', true);

  clone.find('.ticket-type-radio').each(function(i, el) {
    $(el).attr('name', 'ticketType[' + that.ticketOptionIndex + ']').
          attr('id', 'ticketType[' + that.ticketOptionIndex + '][clone' + i + ']');
  });

  clone.find('.ticket-type-radio + label').each(function(i, el) {
    $(el).attr('for', 'ticketType[' + that.ticketOptionIndex + '][clone' + i + ']');
  });

  clone.find('.ticket-amount-field').
        val('1').
        attr('name', 'ticketAmount[' + that.ticketOptionIndex + ']').
        siblings('label').
        attr('for', 'ticketAmount[' + that.ticketOptionIndex + ']');

  clone.insertAfter($('.buy-ticket-form .dynamic-field:last'));
}

DynamicFields.prototype.onRemoveField = function(e) {
  $(this).parents('.dynamic-field:first').remove();
}

module.exports = DynamicFields;
