$(function() {
  outputBoard(generateTestBoard());
  $('confirm-move').click(chooseMoveButton);
});
