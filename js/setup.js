'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_PERSONS = 4;

var userDialogOpen = document.querySelector('.setup-open');
var userDialog = document.querySelector('.setup');
var userDialogClose = userDialog.querySelector('.setup-close');
var username = userDialog.querySelector('.setup-user-name');
var setupPlayer = userDialog.querySelector('.setup-player');

function onPopupEscPress(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (!username.matches(':focus')) {
      closePopup();
    }
  }
}

function openPopup() {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  setupPlayer.addEventListener('click', onClickGetColor);
}

function closePopup() {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  setupPlayer.removeEventListener('click', onClickGetColor);
}

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');

var inputCoatColor = setupPlayer.querySelector('input[name="coat-color"]');
var inputEyesColor = setupPlayer.querySelector('input[name="eyes-color"]');
var inputFireballColor = setupPlayer.querySelector('input[name="fireball-color"]');

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function onClickGetColor(evt) {
  var color;
  if (evt.target === wizardCoat) {
    color = COAT_COLOR[randomIndex(COAT_COLOR)];
    evt.target.style.fill = color;
    inputCoatColor.value = color;
  } else
  if (evt.target === wizardEyes) {
    color = EYES_COLOR[randomIndex(EYES_COLOR)];
    evt.target.style.fill = color;
    inputEyesColor.value = color;
  } else {
    color = FIREBALL_COLOR[randomIndex(FIREBALL_COLOR)];
    evt.target.style.backgroundColor = color;
    inputFireballColor.value = color;
  }
}

var similarListElement = userDialog.querySelector('.setup-similar-list');

function getPersons() {
  var persons = [];
  for (var i = 0; i < NUMBER_PERSONS; i++) {
    persons.push({
      name: FIRST_NAMES[randomIndex(FIRST_NAMES)] + ' ' + LAST_NAMES[randomIndex(LAST_NAMES)],
      coatColor: COAT_COLOR[randomIndex(COAT_COLOR)],
      eyesColor: EYES_COLOR[randomIndex(EYES_COLOR)]
    });
  }
  return persons;
}

var wizards = getPersons();

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
