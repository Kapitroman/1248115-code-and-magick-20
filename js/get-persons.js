'use strict';

(function () {
  window.getPersons = function () {
    var persons = [];
    for (var i = 0; i < window.data.NUMBER_PERSONS; i++) {
      persons.push({
        name: window.data.FIRST_NAMES[window.utils.getRandomIndex(window.data.FIRST_NAMES)] + ' ' + window.data.LAST_NAMES[window.utils.getRandomIndex(window.data.LAST_NAMES)],
        coatColor: window.data.COAT_COLOR[window.utils.getRandomIndex(window.data.COAT_COLOR)],
        eyesColor: window.data.EYES_COLOR[window.utils.getRandomIndex(window.data.EYES_COLOR)]
      });
    }
    return persons;
  };
})();
