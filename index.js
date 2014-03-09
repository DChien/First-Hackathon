$(function() {
  outputBoard(board);
  $('#button-move-menu').click(function() {
    $('#main-menu').fadeOut(function() {
      $('#move-menu').fadeIn();
    });
  });
  $('#button-item-menu').click(function() {
    $('#main-menu').fadeOut(function() {
      $('#item-menu').fadeIn();
    });
  });
  $('#move-menu-back-button').click(function() {
    $('#move-menu').fadeOut(function() {
      $('#main-menu').fadeIn();
    });
  });
  $('#item-menu-back-button').click(function() {
    $('#item-menu').fadeOut(function() {
      $('#main-menu').fadeIn();
    });
  });
  $('#fund-menu-back-button').click(function() {
    $('#fund-menu').fadeOut(function() {
      $('#item-menu').fadeIn();
    });
  });
  $('.item-button').click(function() {
    $('#fund-menu-item').text($(this).text());
    $('#item-menu').fadeOut(function() {
      $('#fund-menu').fadeIn();
    });
  });
  $('#confirm-move').click(chooseMoveButton);
  $('#fund-button').click(fundButton);
});

