$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('.unitTooltip').mouseover(function(){
      $('.unitTooltip').tooltip('show');
    });
  })