'use strict';

(function () {
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialog = document.querySelector('.setup');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var setupPlayer = userDialog.querySelector('.setup-player');
  var username = userDialog.querySelector('.setup-user-name');

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
    setupPlayer.addEventListener('click', window.handlerColorize);
  }

  function closePopup() {
    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    setupPlayer.removeEventListener('click', window.handlerColorize);
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
