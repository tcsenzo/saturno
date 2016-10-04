$.formUtils.addValidator({
    name : 'cpf',
    validatorFunction : function(string) {

        // Based on this post from DevMedia:
        // http://www.devmedia.com.br/validar-cpf-com-javascript/23916

        // clean up the input (digits only) and set some support vars
        var cpf = string.replace(/\D/g,'');
        var sum1 = 0;
        var sum2 = 0;
        var remainder1 = 0;
        var remainder2 = 0;

        // skip special cases
        if (cpf.length !== 11 || cpf === '00000000000') {
            return false;
        }

        // check 1st verification digit
        for (i = 1; i<= 9; i++) {
            sum1 += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        remainder1 = (sum1 * 10) % 11;
        if (remainder1 >= 10) {
            remainder1 = 0;
        }
        if (remainder1 !== parseInt(cpf.substring(9, 10))) {
            return false;
        }

        // check 2nd verification digit
        for (i = 1; i <= 10; i++) {
            sum2 += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        remainder2 = (sum2 * 10) % 11;
        if (remainder2 >= 10) {
            remainder2 = 0;
        }
        if (remainder2 !== parseInt(cpf.substring(10, 11))) {
            return false;
        }

        return true;

    },
    errorMessage : '',
    errorMessageKey: 'badBrazilCPFAnswer'

});

$.formUtils.addValidator({
    name : 'brphone',
    validatorFunction : function(string) {

        // validates telefones such as (having X as numbers):
        // (XX) XXXX-XXXX
        // (XX) XXXXX-XXXX
        // XX XXXXXXXX
        // XX XXXXXXXXX
        // XXXXXXXXXX
        // XXXXXXXXXXX
        // +XX XX XXXXX-XXXX
        // +X XX XXXX-XXXX
        // And so on…

        if (string.match(/^(\+[\d]{1,3}[\s]{0,1}){0,1}(\(){0,1}(\d){2}(\)){0,1}(\s){0,1}(\d){4,5}([-. ]){0,1}(\d){4}$/g)) {
            return true;
        }

        return false;

    },
    errorMessage : '',
    errorMessageKey: 'badBrazilTelephoneAnswer'

});

$.formUtils.addValidator({
    name : 'cep',
    validatorFunction : function(string) {

        // validates CEP  such as (having X as numbers):
        // XXXXX-XXX
        // XXXXX.XXX
        // XXXXX XXX
        // XXXXXXXX

        if (string.match(/^(\d){5}([-. ]){0,1}(\d){3}$/g)) {
            return true;
        }

        return false;

    },
    errorMessage : '',
    errorMessageKey: 'badBrazilCEPAnswer'

});

(function($) {

	'use strict';

  var setupValidationDependsOn = function($form, conf) {

      var dependingOnBeforeValidation = function() {

          var $input = $(this),
            nameOfDependingInput = $input.valAttr('depends-on') || $input.valAttr('if-checked');

          // Whether or not this input should be validated depends on if another input has a value
          if (nameOfDependingInput) {

            // Set the boolean telling us that the validation depends
            // on another input being checked
            var valueOfDependingInput = $.formUtils.getValue('[name="' + nameOfDependingInput + '"]', $form),
              listWithRequiredValues = $.split($input.valAttr('depends-on-value'), false, false),
              dependingInputIsMissingValueOrHasIncorrectValue = !valueOfDependingInput || (
                  listWithRequiredValues.length &&
                    !valueIsInList(valueOfDependingInput, listWithRequiredValues)
                );

            if (dependingInputIsMissingValueOrHasIncorrectValue) {
              $input.valAttr('skipped', '1');
            }
          }
        },
        valueIsInList = function(value, valueList) {
          var isInList = false,
            lowerCaseValue = value.toLocaleLowerCase();

          $.each(valueList, function(i, otherValue) {
            if (lowerCaseValue === otherValue.toLocaleLowerCase()) {
              isInList = true;
              return false;
            }
          });
          return isInList;
        },
        dependingOnValueChanged = function() {
          var $input = $(this),
            $otherInput = this.$dependingInput,
            valueOfDependingInput = $.formUtils.getValue($input),
            requiredValueOfDependingInput = $input.valAttr('depending-value'),
            otherInputHasValue = $.formUtils.getValue($otherInput) ? true:false,
            dependingInputIsMissingValueOrHasIncorrectValue = !valueOfDependingInput || (
                requiredValueOfDependingInput &&
                requiredValueOfDependingInput !== valueOfDependingInput
              );

          if (dependingInputIsMissingValueOrHasIncorrectValue && !otherInputHasValue) {
            $.formUtils.dialogs.removeInputStylingAndMessage($otherInput, conf);
          }
        };

      $form.find('[data-validation-depends-on]')
        .off('beforeValidation', dependingOnBeforeValidation)
        .on('beforeValidation', dependingOnBeforeValidation)
        .each(function() {
          // Remove validation when on depending input
          var $dependingInput = $(this);
          $form.find('[name="'+$dependingInput.valAttr('depends-on')+'"]').each(function() {
            $(this)
              .off('change', dependingOnValueChanged)
              .on('change', dependingOnValueChanged)
              .valAttr('depending-value', $dependingInput.valAttr('depends-on-value'));

            this.$dependingInput = $dependingInput;

          });

        });

    },
    setupValidationTogetherWith = function($form, conf) {

      var optionalBeforeValidation = function() {
          var $input = $(this),
            dependingInputs = $input.valAttr('optional-if-answered'),
            dependingInputsHasValue = false,
            thisInputHasAnswer = $.formUtils.getValue($input) ? true:false;

          if (!thisInputHasAnswer) {
            $.each($.split(dependingInputs), function(i, inputName) {
              var $dependingInput = $form.find('[name="'+inputName+'"]');
              dependingInputsHasValue = $.formUtils.getValue($dependingInput) ? true:false;
              if (dependingInputsHasValue) {
                return false;
              }
            });

            if (dependingInputsHasValue) {
              $input.valAttr('skipped', 1);
            }
          }
        },
        optionalInputOnChange = function() {
          var $input = $(this),
            dependingInputs = $input.valAttr('optional-if-answered');

          $.each($.split(dependingInputs), function(i, inputName) {
            var $dependingInput = $form.find('[name="'+inputName+'"]'),
                dependingInputsHasValue = $.formUtils.getValue($dependingInput) ? true:false;
            if (!dependingInputsHasValue) {
              $.formUtils.dialogs.removeInputStylingAndMessage($dependingInput, conf);
            }
          });
        };

      $form.find('[data-validation-optional-if-answered]')
        .off('beforeValidation', optionalBeforeValidation)
        .on('beforeValidation', optionalBeforeValidation)
        .each(function() {
          $(this)
            .off('change', optionalInputOnChange)
            .on('change', optionalInputOnChange);
        });
    };

  $.formUtils.$win.bind('validatorsLoaded formValidationSetup', function(evt, $form, conf) {
    if( !$form ) {
      $form = $('form');
    }
    setupValidationDependsOn($form, conf);
    setupValidationTogetherWith($form, conf);
  });

})(jQuery);


$.formUtils.LANG = {
  errorTitle: 'O formulário não pode ser enviado!',
  requiredField: 'Campo de preenchimento obrigatório',
  requiredFields: 'Você ainda não preencheu todos os campos obrigatórios',
  badTime: 'A hora digitada não é válida',
  badEmail: 'O e-mail digitado não é válido',
  badTelephone: 'O telefone digitado não é válido',
  badSecurityAnswer: 'A pergunta de segurança não foi respondida corretamente',
  badDate: 'A data digitada não é válida',
  lengthBadStart: 'Sua resposta deve incluir entre ',
  lengthBadEnd: ' caracteres',
  lengthTooLongStart: 'Sua resposta tem mais que ',
  lengthTooShortStart: 'Sua resposta tem menos que',
  notConfirmed: 'As informações digitadas não puderam ser confirmadas',
  badDomain: 'O domínio digitado não é válido',
  badUrl: 'A URL digitada não é válida',
  badCustomVal: 'Os dados digitados não são válidos',
  andSpaces: ' e espaços',
  badInt: 'O número digitado não é válido',
  badSecurityNumber: 'O número de seguro social digitado não é válido',
  badUKVatAnswer: 'O número do VAT digitado não é válido para o Reino Unido',
  badStrength: 'Senha muito fraca',
  badNumberOfSelectedOptionsStart: 'Selecione pelo menos',
  badNumberOfSelectedOptionsEnd: ' alternativa(s)',
  badAlphaNumeric: 'Use somente caracteres alfanuméricos (letras a-z e números)',
  badAlphaNumericExtra: ' e',
  wrongFileSize: 'O arquivo selecionado é maior que o tamanho máximo permitido (%s)',
  wrongFileType: 'Somente arquivos %s são permitidos',
  groupCheckedRangeStart: 'Por favor, escolha entre ',
  groupCheckedTooFewStart: 'Por favor, escolha pelo menos ',
  groupCheckedTooManyStart: 'Por favor, escolhe no máximo ',
  groupCheckedEnd: ' alternativa(s)',
  badCreditCard: 'O número de cartão de crédito digitado não é válido',
  badCVV: 'O código de segurança do cartão de crédito não é válido',
  wrongFileDim: 'As dimensões da imagem não são válidas',
  imageTooTall: 'a imagem não pode ser mais alta que ',
  imageTooWide: 'a imagem não pode ser mais larga que ',
  imageTooSmall: 'a imagem é muito pequena',
  min: 'min',
  max: 'max',
  imageRatioNotAccepted : 'A proporção da imagem (largura x altura) não é válida',
  badBrazilTelephoneAnswer: 'O número de telefone digitado é inválido',
  badBrazilCEPAnswer: 'O CEP digitado é inválido',
  badBrazilCPFAnswer: 'O CPF digitado é inválido'
};
