'use strict';

(function () {

  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  window.renderListWizards = function (wizards) {
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

})();
