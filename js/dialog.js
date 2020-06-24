'use strict';

(function () {
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialog = document.querySelector('.setup');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var setupPlayer = userDialog.querySelector('.setup-player');
  var username = userDialog.querySelector('.setup-user-name');
  var xDialog = userDialog.style.left;
  var yDialog = userDialog.style.top;

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
    userDialog.style.top = yDialog;
    userDialog.style.left = xDialog;

    document.addEventListener('keydown', onPopupEscPress);
    setupPlayer.addEventListener('click', window.colorize.handlerColorize.bind(window.colorize));
  }

  function closePopup() {
    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    setupPlayer.removeEventListener('click', window.colorize.handlerColorize.bind(window.colorize));
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

})();
