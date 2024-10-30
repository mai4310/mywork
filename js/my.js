














	
    $('.slider').slick({
		fade:true,//切り替えをフェードで行う。初期値はfalse。
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
		speed:1000,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
		arrows: true,//左右の矢印あり
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: true,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});


'use strict';

// ×をクリックするとフローティングバナー（追従バナー）が閉じる
window.onload = function () {
  document.getElementById("js_floatingBanner_close").onclick = function () {
    this.parentNode.classList.add('js_close');
  };
}





$(window).on('load orientationchange', function() {
  setTimeout(function() {
    var w = window.innerWidth;
    var point = 1000;
    if (w > point) {
      //それ以外のときの処理
      $("body").addClass("pc").removeClass("spn");
      $(".Nav > ul").removeClass("open close").css("display", "block");
      $(".Nav .navbtn a").removeClass("open close").html("<span>メニューを閉じる</span>");
    } else {
      //画面サイズが1000px未満のときの処理
      $("body").addClass("spn").removeClass("pc");
      $(".Nav > ul").addClass("close").removeClass("open").css("display", "none");
      $(".Nav .navbtn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
    }
  }, 100);
});
 
//resize
$(window).resize(function() {
  var windowWidth = window.innerWidth;
  var point = 1000;
  var timer = false;
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    var ww = $(window).width();
    if (windowWidth != ww) {
      if (windowWidth > point) {
        $("body").addClass("pc").removeClass("spn");
        $(".Nav > ul").removeClass("open close").css("display", "block");
        $(".Nav > ul > li").css("display","inline-block");
        $(".Nav .navbtn a").removeClass("open close").html("<span>メニューを閉じる</span>");
        $(".Nav ul li.parent a").removeClass("open").addClass("close");
        $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      } else { //画面サイズが1000px未満のときの処理
        $("body").addClass("spn").removeClass("pc");
        $(".Nav > ul").addClass("close").removeClass("open").css("display", "none");
        $(".Nav .navbtn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
        $(".Nav ul li.parent a").removeClass("open").addClass("close");
        $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      }
    } else {}
  }, 50);
});
 
//nav dropdown
$(function() {
  $(".Nav ul li.parent a").each(function() {
    var submenu = $(this).next("ul.submenu");
    var samelevel = $(this).parent().siblings().find("ul.submenu");
    var samelevelbtn = $(this).parent().siblings().find("a");
    $(this).addClass("close");
    $(submenu).addClass("close");
    $(this).on('click', function() {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open").addClass("close");
        $(submenu).slideUp("fast").removeClass("open").addClass("close");
      } else {
        $(samelevel).slideUp("fast").removeClass("open").addClass("close");
        $(samelevelbtn).removeClass("open").addClass("close");
        $(submenu).slideDown("fast").removeClass("close").addClass("open");
        $(this).removeClass("close").addClass("open");
      }
      //return false;
    });
  });
 
  $(document).click(function(event) {
    if (!$(event.target).closest(".Nav").length) {
      $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      $(".Nav ul li.parent a").removeClass("open").addClass("close");
      //alert('changeイベントが発生しました。');
    }
  });
});
 
//SP nav
$(function() {
  $(".Nav .navbtn a").click(function() {
    if ($(".Nav > ul").css("display") == "none") {
      $(".Nav > ul").addClass("open").removeClass("close").slideDown("fast");
      $(".Nav > ul > li").css("display","block");
      $(this).removeClass("close").addClass("open").html("<span>メニューを閉じる</span>");
    } else {
      $(".Nav > ul").addClass("close").removeClass("open").slideUp("fast");
      $(".Nav ul li.parent").removeClass("open").addClass("close");
      $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      $(this).addClass("close").removeClass("open").html("<span>メニューを開く</span>");
    }
  });
});
 
//SP アンカーリンク
$(function() {
  $("ul.submenu a[href^='#']").click(function(event) {
    //alert('changeイベントが発生しました。');
    $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
    $(".Nav ul li.parent a").removeClass("open").addClass("close");
    $(".spn .Nav > ul").addClass("close").removeClass("open").slideUp("fast");
    $(".spn .Nav .navbtn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
    //$(this).removeClass("close").addClass("open").html("<span>メニューを閉じる</span>");
  });
});
 
 
  





