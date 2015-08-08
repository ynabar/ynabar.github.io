var number = 0;

$(document).ready(function(){
$("#a10").click(function(){
number += 10
$("#out").html(number);
});
$("#n10").click(function(){
number -= 10;
$("#out").html(number);
});

$("#a20").click(function(){
number += 20;
$("#out").html(number);
});
$("#n20").click(function(){
number -= 20;
$("#out").html(number);
});

$("#a30").click(function(){
number += 30;
$("#out").html(number);
});
$("#n30").click(function(){
number -= 30;
$("#out").html(number);
});

$("#red").click(function(){
$("#out").css("background-color", "red"); 
});

$("#blue").click(function(){
$("#out").css("background-color", "blue"); 
});

$("#out").click(function(){
$("#out").css("background-color", "white"); 
$("#out").html("<br/>"); 
number = 0;
});

});