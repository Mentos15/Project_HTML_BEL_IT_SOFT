$(document).ready(function() {
  $('.header__burger').click(function(event){
    $('.header__burger , .header-body__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header-body-menu__link').click(function(event){
    $('.header__burger , .header-body__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});