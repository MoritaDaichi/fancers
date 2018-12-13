$(function(){
  $(window).on('load', function(){
    var path = location.pathname;
    if(path == "/"){
      var $addBlocks = $('.block_wrap');
      var html="";
      for(var i = 0;i < window.innerWidth/ 10;i++){
        var random = Math.floor( Math.random() * 3 ) + 1;
        html = '<div class="block' + random + '"><div>';
        $addBlocks.append(html) ;
      }
    }
  })
})
