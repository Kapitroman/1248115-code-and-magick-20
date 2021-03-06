'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupPlayer = userDialog.querySelector('.setup-player');

  var inputCoatColor = setupPlayer.querySelector('input[name="coat-color"]');
  var inputEyesColor = setupPlayer.querySelector('input[name="eyes-color"]');
  var inputFireballColor = setupPlayer.querySelector('input[name="fireball-color"]');

  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = userDialog.querySelector('.setup-fireball');

  window.colorize = {
    coatColor: wizardCoat.style.fill,
    eyesColor: wizardEyes.style.fill,
    handlerColorize: function (evt) {
      var color;
      if (evt.target === wizardCoat) {
        color = window.data.COAT_COLOR[window.utils.getRandomIndex(window.data.COAT_COLOR)];
        evt.target.style.fill = color;
        inputCoatColor.value = color;
        this.coatColor = color;
        window.debounce(window.updateWizards);
      }
      if (evt.target === wizardEyes) {
        color = window.data.EYES_COLOR[window.utils.getRandomIndex(window.data.EYES_COLOR)];
        evt.target.style.fill = color;
        inputEyesColor.value = color;
        this.eyesColor = color;
        window.debounce(window.updateWizards);
      }
      if (evt.target === setupFireball) {
        color = window.data.FIREBALL_COLOR[window.utils.getRandomIndex(window.data.FIREBALL_COLOR)];
        evt.target.style.backgroundColor = color;
        inputFireballColor.value = color;
      }
    }
  };

})();
