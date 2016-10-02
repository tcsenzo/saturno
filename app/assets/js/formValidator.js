require('./ptBr.js');

function FormValidator() {
  $(document).ready(function() {
    $.validate({
      validateHiddenInputs: true,
      language: 'pt',
      dateFormat: 'dd/mm/yyyy',
      modules: 'brazil'
    });
  })
}

module.exports = new FormValidator();
