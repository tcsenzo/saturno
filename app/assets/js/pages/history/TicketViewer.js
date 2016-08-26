class TicketViewer {
  constructor() {
    this.$container = $('.history-container .purchased-item');
    this.eventJSON = this.$container.data('event-json');
    this.$showTicketsForm = $('.show-tickets-form');
    this.binds();
  }

  binds() {
    this.$container.find('.show-tickets-btn').on('click', {that: this}, this.onShowTickets);
  }

  onShowTickets(e) {
    e.preventDefault();
    let that = e.data.that,
        tickets = $(this).data('tickets-json'),
        showTicketsJSON = {
          'event': that.eventJSON,
          'tickets': $.isArray(tickets) ? tickets : [tickets] 
        };

    if(typeof showTicketsJSON.tickets)

    that.$showTicketsForm.find('input[name=showTicketsJSON]').
      val(encodeURIComponent(JSON.stringify(showTicketsJSON)));

    that.$showTicketsForm.submit();
  }
}

module.exports = TicketViewer;
