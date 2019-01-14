// JavaScript Document
$(function(){
  //スライドショー ==========================
  var page
  var lastPage =parseInt($("#slide img").length-1);
  var random = Math.round( Math.random()*lastPage );
  var nextPage
  
  //初期ページをランダム設定
  page=random
    if(page === lastPage){
                 nextPage = 0;
    }else{
                 nextPage = page+1;
  };
   // console.log("random："+random);
   // console.log("page："+page);
   // console.log("nextPage："+nextPage);
  
  //画像の重なり順の初期表示
  //nextPageを先頭にするのは初回のインターバルで前面に来る画像なのでこれをfadeOutするため
    $("#slide img").css("z-index","-3");
    $("#slide img").eq(nextPage).css("z-index","-1");
  
  //ページ切換関数
  function changePage(){
   // console.log("page："+page);
   // console.log("nextPage："+nextPage);
  //まず全部最背面へ
    $("#slide img").css("z-index","-3");
  //pageを最前面へ
    $("#slide img").eq(page).css("z-index","-1");
  //nextPageを２番目へ
    $("#slide img").eq(nextPage).css("z-index","-2");
  //毎回全部display blockする
    $("#slide img").css("display","block");
  //最前面のpageをfadeOutすると２番目nextPageが見えてくる
    $("#slide img").eq(page).fadeOut(2500);
  };
  
  //カウントアップ関数
  function countUp(){
    if(page === lastPage){
      page = 0;
      nextPage = 1;
      changePage();
     }else if(nextPage===lastPage){
      page ++;
      nextPage = 0;
      changePage();
     }else{
       page ++;
       nextPage = page+1;
       changePage();
     } 
   };
    
  //～秒間隔でイメージ切換の発火設定
  var Timer;
  function startTimer(){
  Timer =setInterval(function(){
            countUp();
       },4000);
  };
  
  //～秒間隔でイメージ切換の停止設定
  function stopTimer(){
  clearInterval(Timer);
  };
  
  //タイマースタート
  startTimer();
    
  });
$('#animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('#animation').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   $(this).addClass("fadeInDown");
  }
 });
});

function showElementAnimation() {

  var element = document.getElementsByClassName('js-animation');
  if(!element) return; // 要素がなかったら処理をキャンセル
  
  var showTiming = window.innerHeight > 800 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

var navigation = $('#nav-main').okayNav();

$(function(){
  var topBtn=$('#pageTop');
  topBtn.hide();
  
   
  
  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
  
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
  
    }else{
  
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
  
    }
  });
  
   
  
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},1000);
    return false;
  
  });
  
  
  });
