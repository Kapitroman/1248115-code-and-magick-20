'use strict';

(function () {

  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.colorize.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.colorize.eyesColor) {
      rank += 1;
    }

    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  window.updateWizards = function () {
    window.renderListWizards(window.getWizards.wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

})();
