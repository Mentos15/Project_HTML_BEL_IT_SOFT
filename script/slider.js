$(document).ready(function(){
  $('.second-background').slick();

  
  $('.first').click(function(event){
    $('.second').removeClass('active');
    $('.third').removeClass('active');
    $('.first').toggleClass('active');
  });
  $('.second').click(function(event){
    $('.first').removeClass('active');
    $('.third').removeClass('active');
    $('.second').toggleClass('active');
  });
  $('.third').click(function(event){
    $('.first').removeClass('active');
    $('.second').removeClass('active');
    $('.third').toggleClass('active');
  });


});