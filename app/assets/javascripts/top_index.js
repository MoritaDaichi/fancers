// $(function(){
//   $(window).on('load', function(){
//     var path = location.pathname;
//     if(path == "/"){
//       var $addBlocks = $('.block_wrap');
//       var html="";
//       for(var i = 0;i < window.innerWidth/ 10;i++){
//         var random = Math.floor( Math.random() * 3 ) + 1;
//         html = '<div class="block' + random + '"><div>';
//         $addBlocks.append(html) ;
//       }
//     }
//   })
// })
function check_one(){
  $(".top_index_activity__check-one").click(function(){
    $(".top_index_activity__image-one").css({
      'display':'block'
    });
    $(".top_index_activity__image-two").css({
      'display':'none'
    });
    $(".top_index_activity__image-three").css({
      'display':'none'
    });
  });
}
function check_two(){
  $(".top_index_activity__check-two").click(function(){
    $(".top_index_activity__image-one").css({
      'display':'none'
    });
    $(".top_index_activity__image-two").css({
      'display':'block'
    });
    $(".top_index_activity__image-three").css({
      'display':'none'
    });
  });
}

function check_three(){
  $(".top_index_activity__check-three").click(function(){
    $(".top_index_activity__image-one").css({
      'display':'none'
    });
    $(".top_index_activity__image-two").css({
      'display':'none'
    });
    $(".top_index_activity__image-three").css({
      'display':'block'
    });
  });
}


$(function(){
  $(window).on('load', function(){
    var path = location.pathname;
    if(path = "/"){
      $(".top_index_activity__image-one").css({
        'display':'block'
      });
      check_one();
      check_two();
      check_three();
    }
  })
})
