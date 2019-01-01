$(function(){
  var image = document.getElementsByClassName("gear");
  var deg = 0;
  setInterval(function(){
    deg += 1;
    var cssDeg = 'rotate(' + deg + 'deg)';
    $(image).css('transform',cssDeg);
    console.log(deg);
    console.log(cssDeg);
  },100);
})
