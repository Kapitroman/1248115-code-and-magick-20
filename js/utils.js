'use strict';

(function () {
  window.utils = {
    getRandomIndex: function (arr) {
      return Math.floor(Math.random() * arr.length);
    },
    getMaxElement: function (arr) {
      var maxElement = arr[0];
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },
    getRandomPercent: function () {
      return Math.round(Math.random() * 100) + '%';
    }
  };
})();
