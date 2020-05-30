'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT = 'Ура вы победили!\nСписок результатов:';
var FONT_GAP = 16;
var TEXT_FONT = 'PT Mono';
var MAX_HIGHT_COLUMN = 150;
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

function getMaxElement(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + 4 * GAP + i * (WIDTH_COLUMN + GAP_COLUMN), CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, ' + Math.floor(Math.random() * 100) + '%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    var hightColumn = (MAX_HIGHT_COLUMN * times[i]) / maxTime;
    var offSet = MAX_HIGHT_COLUMN - hightColumn;
    ctx.fillRect(CLOUD_X + 4 * GAP + i * (WIDTH_COLUMN + GAP_COLUMN), CLOUD_Y + 9 * GAP + offSet, WIDTH_COLUMN, hightColumn);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + 4 * GAP + i * (WIDTH_COLUMN + GAP_COLUMN), CLOUD_Y + 8 * GAP + offSet);
  }
};
