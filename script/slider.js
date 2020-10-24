$(document).ready(function(){
  $('.second-background').slick();

  
  $('.first').click(function(event){
    $('.second').removeClass('active');
    $('.third').removeClass('active');
    $('.first').toggleClass('active');
    $('.our-clients-content-pagination__photo').css('background-image','url(./img/our-clients/4-1.png)')
  });
  $('.second').click(function(event){
    $('.first').removeClass('active');
    $('.third').removeClass('active');
    $('.second').toggleClass('active');
    $('.our-clients-content-pagination__photo').css('background-image','url(./img/our-clients/pagination-img.png)')
  });
  $('.third').click(function(event){
    $('.first').removeClass('active');
    $('.second').removeClass('active');
    $('.third').toggleClass('active');
    $('.our-clients-content-pagination__photo').css('background-image','url(./img/our-clients/3-1.png)')
  });


});