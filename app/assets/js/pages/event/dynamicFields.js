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

    clone.find('.ticket-type-field :nth-child(1)').
          prop('selected', true);

    clone.find('.ticket-type-field').
          attr('name', `ticketType[${that.ticketOptionIndex}]`).
          siblings('label').
          attr('for', `ticketType[${that.ticketOptionIndex}]`);

    clone.find('.ticket-amount-field').
          val('').
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
