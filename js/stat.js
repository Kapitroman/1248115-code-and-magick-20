'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var TEXT = 'Ура вы победили!\nСписок результатов:';
  var FONT_GAP = 16;
  var TEXT_FONT = 'PT Mono';
  var MAX_HEIGHT_COLUMN = 150;
  var WIDTH_COLUMN = 40;
  var GAP_COLUMN = 50;

  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  function renderText(ctx) {
    ctx.fillStyle = '#000';
    ctx.font = FONT_GAP + 'px ' + TEXT_FONT;
    var text = TEXT.split('\n');
    for (var i = 0; i < text.length; i++) {
      ctx.fillText(text[i], CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP + i * 2 * GAP);
    }
  }

  function renderTextColumn(ctx, data, x, y) {
    ctx.fillStyle = '#000';
    ctx.fillText(data, x, y);
  }

  function renderColumn(ctx, player, x, y, width, height) {
    ctx.fillStyle = 'hsl(240, ' + window.utils.getRandomPercent() + ', ' + window.utils.getRandomPercent() + ')';
    if (player === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(x, y, width, height);
  }

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderText(ctx);
    var maxTime = window.utils.getMaxElement(times);
    for (var i = 0; i < players.length; i++) {
      renderTextColumn(ctx, players[i], CLOUD_X + 4 * GAP + i * (WIDTH_COLUMN + GAP_COLUMN), CLOUD_Y + CLOUD_HEIGHT - GAP);
      var heightColumn = (MAX_HEIGHT_COLUMN * Math.round(times[i])) / maxTime;
      var offSet = MAX_HEIGHT_COLUMN - heightColumn;
      renderColumn(ctx, players[i], CLOUD_X + 4 * GAP + i * (WIDTH_COLUMN + GAP_COLUMN), CLOUD_Y + 9 * GAP + offSet, WIDTH_COLUMN, heightColumn);
      renderTextColumn(ctx, Math.round(times[i]), CLOUD_X + 4 * GAP + i * (WIDTH_COLUMN + GAP_COLUMN), CLOUD_Y + 8 * GAP + offSet);
    }
  };
})();
