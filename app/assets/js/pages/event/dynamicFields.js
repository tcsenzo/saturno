class DynamicFields {
  constructor() {
    this.ticketOptionIndex = 0;
    this.$template = $('.dynamic-field-template');
    if(this.$template.length < 1) {
      return false;
    }

    this.binds();
  }

  binds() {
    this.$template.find('.add-field').on('click', {that: this}, this.onAddField);
    $('.buy-ticket-form').on('click', '.remove-field', this.onRemoveField);
  }

  onAddField(e) {
    let that = e.data.that,
        clone = that.$template.clone();

    ++that.ticketOptionIndex;

    clone.removeClass('dynamic-field-template').
          find('.remove-field').
          removeClass('hidden');

    clone.find('.add-field').
          addClass('hidden');

    clone.find('.ticket-type-radio:first').
          attr('checked', true);

    clone.find('.ticket-type-radio').each((i, el) => {
      $(el).attr('name', `ticketType[${that.ticketOptionIndex}]`).
            attr('id', `ticketType[${that.ticketOptionIndex}][clone${i}]`);
    });

    clone.find('.ticket-type-radio + label').each((i, el) => {
      $(el).attr('for', `ticketType[${that.ticketOptionIndex}][clone${i}]`);
    });

    clone.find('.ticket-amount-field').
          val('1').
          attr('name', `ticketAmount[${that.ticketOptionIndex}]`).
          siblings('label').
          attr('for', `ticketAmount[${that.ticketOptionIndex}]`);

    clone.insertAfter($('.buy-ticket-form .dynamic-field:last'));
  }

  onRemoveField(e) {
    $(this).parents('.dynamic-field:first').remove();
  }
}

module.exports = DynamicFields;
