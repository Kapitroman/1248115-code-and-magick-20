'use strict';

(function () {

  var URL = 'https://javascript.pages.academy/code-and-magick/';
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;

  function request(data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    if (data) {
      xhr.open('POST', URL);
      xhr.send(data);
    } else {
      xhr.open('GET', URL + 'data');
      xhr.send();
    }
  }

  window.backend = {
    load: request.bind(null, null),
    save: request
  };

})();
