'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var numberPersons = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getArrayOfPersons() {
  var arrayOfPersons = [];
  for (var i = 0; i < numberPersons; i++) {
    arrayOfPersons.push({
      name: FIRST_NAMES[randomIndex(FIRST_NAMES)] + ' ' + LAST_NAMES[randomIndex(LAST_NAMES)],
      coatColor: COAT_COLOR[randomIndex(COAT_COLOR)],
      eyesColor: EYES_COLOR[randomIndex(EYES_COLOR)]
    });
  }
  return arrayOfPersons;
}

var wizards = getArrayOfPersons();

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

function renderListOfWizard() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
}

renderListOfWizard();

userDialog.querySelector('.setup-similar').classList.remove('hidden');
