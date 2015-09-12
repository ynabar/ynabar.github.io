$(document).ready(function(){

  $(".background").hover(function(){
  $(this).find("p").animate({bottom:0}, 300);
}, function(){
  $(".background p").animate({bottom: "-2em"}, 300);
});

});