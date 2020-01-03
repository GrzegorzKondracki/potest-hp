$(".bars").on("click", function() {
  $(".bars").toggleClass("show");
  $(".x").toggleClass("show");
  $(".mobile-nav").toggleClass("show");
  $(".logo").toggleClass("hidden");
  $(".logo-mobile").toggleClass("hidden");
  $(".fb-but").toggleClass("show");
  $(".biz-logo").toggleClass("show");
  $(".it-logo").toggleClass("show");
  $(".header").toggleClass("show");
  $(".squares-violet").toggleClass("show");
  $(".top-line-mobile").toggleClass("hidden");
  $(".first-square").toggleClass("hidden");
  $(".second-square").toggleClass("hidden");
  $(".third-square").toggleClass("hidden");
  $(".main__btn").toggleClass("hidden");
});

$(".x").on("click", function() {
  $(".bars").toggleClass("show");
  $(".x").toggleClass("show");
  $(".mobile-nav").toggleClass("show");
  $(".logo").toggleClass("hidden");
  $(".logo-mobile").toggleClass("hidden");
  $(".fb-but").toggleClass("show");
  $(".biz-logo").toggleClass("show");
  $(".it-logo").toggleClass("show");
  $(".header").toggleClass("show");
  $(".squares-violet").toggleClass("show");
  $(".top-line-mobile").toggleClass("hidden");
  $(".first-square").toggleClass("hidden");
  $(".second-square").toggleClass("hidden");
  $(".third-square").toggleClass("hidden");
  $(".main__btn").toggleClass("hidden");
});

$(".main__btn").hover(function() {
  $(".main__btnLink3").toggleClass("move");
  $(".arrow-down").toggleClass("move");
});

$(".main__btn5").hover(function() {
  $(".main__btnLink3").toggleClass("move");
  $(".arrow-join").toggleClass("move");
});

$(".main__btn2").hover(function() {
  $(".main__btnLink2").toggleClass("move");
  $(".arrow-right").toggleClass("move");
});

$(".main__btn3").hover(function() {
  $(".main__btnLink2").toggleClass("move");
  $(".arrow-right").toggleClass("move");
});

$(".main__btn-offer").hover(function() {
  $(".main__btnLink3").toggleClass("move");
  $(".right-arrow").toggleClass("move");
});
$(".main__btn-offer2").hover(function() {
  $(".main__btnLink5").toggleClass("move");
  $(".right-arrow2").toggleClass("move");
});
$(".main__btn-offer3").hover(function() {
  $(".main__btnLink6").toggleClass("move");
  $(".right-arrow3").toggleClass("move");
});
$(".main__btn-offer4").hover(function() {
  $(".main__btnLink7").toggleClass("move");
  $(".right-arrow4").toggleClass("move");
});
$(".main__btn-offer5").hover(function() {
  $(".main__btnLink8").toggleClass("move");
  $(".right-arrow5").toggleClass("move");
});

$(".main__btn4").hover(function() {
  $(".main__btnLink4").toggleClass("move");
  $(".arrow-right").toggleClass("move");
});

// Hover offer
$(".offer-item.first").hover(function() {
  $(".offer-item.first").toggleClass("hover");
  $(".offer-first-squqre.square1").toggleClass("hover");
});
$(".offer-item.second").hover(function() {
  $(".offer-item.second").toggleClass("hover");
  $(".offer-first-squqre.square2").toggleClass("hover");
});
$(".offer-item.third").hover(function() {
  $(".offer-item.third").toggleClass("hover");
  $(".offer-first-squqre.square3").toggleClass("hover");
});
$(".offer-item.fourth").hover(function() {
  $(".offer-item.fourth").toggleClass("hover");
  $(".offer-first-squqre.square4").toggleClass("hover");
});
$(".offer-item.fifth").hover(function() {
  $(".offer-item.fifth").toggleClass("hover");
  $(".offer-first-squqre.square5").toggleClass("hover");
});

// Hover footer
$(".copyrights__more").hover(function() {
  $(".footer-right-arrow").toggleClass("show");
  $(".copyrights__more").toggleClass("move");
});

$(".reg-arrow").hover(function() {
  $(".footer-right-arrow-reg").toggleClass("show");
  $(".reg-arrow").toggleClass("move");
});

// $(".reg .fb-but").hover(function() {
//   $(".reg .fb-but").toggleClass("hidden");
//   $(".reg .fb-but2").toggleClass("show");
// });

// Scroll to top button
var btn = $("#button");

$(window).scroll(function() {
  if ($(window).scrollTop() > 2600) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0
    },
    800
  );
});

// Scroll to section
// $("nav a").on("click", function() {
//   const $goToSection = "[data-section=" + $(this).attr("class") + "]";
//   $("body, html").animate({
//     scrollTop: $($goToSection).offset().top
//   });
// });

// $("#about-section").on("click", function() {
//   const $goToSection = "[data-section=" + $(this).attr("id") + "]";
//   $("body, html").animate({
//     scrollTop: $($goToSection).offset().top
//   });
// });

// $(".mobile-arrow-down").on("click", function() {
//   const $goToSection = "[data-id=" + $(this).attr("about-section") + "]";
//   $("body, html").animate({
//     scrollTop: $($goToSection).offset().top
//   });
// });

$(document).on("click", 'a[data-href^="#"], div[data-href^="#"]', function(
  event
) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "data-href")).offset().top
    },
    500
  );
});

// Hover top bar
$(".input").on("click", function() {
  $(".input").toggleClass("on");
  $(".search-x").toggleClass("on");
  $(".search-icon-color").toggleClass("on");
  $(".search-icon").toggleClass("hidden");
});

// $(".input, .search-icon").on("click", function() {
//   $(".input").toggleClass("on");
//   $(".search-x").toggleClass("on");
//   $(".search-icon-color").toggleClass("on");
//   $(".search-icon").toggleClass("hidden");
// });

// $(".search-icon").on("click", function() {
//   $(".input").toggleClass("on");
//   $(".search-x").toggleClass("on");
//   $(".search-icon-color").toggleClass("on");
//   $(".search-icon").toggleClass("hidden");
// });

function blurFunction() {
  if ($("#input, .search-icon").hasClass("on")) {
    $("#input").removeClass("on");
    $(".search-x").removeClass("on");
    $(".search-icon-color").removeClass("on");
    $(".search-icon").removeClass("hidden");
  }
}

function blurMobile() {
  if ($("#input-mobile").hasClass("clicked")) {
    $("#input-mobile").removeClass("clicked");
    $(".search-icon-mobile").removeClass("hidden");
  }
}

$(".login").hover(function() {
  $(".login-icon").toggleClass("hover");
  $(".login-icon-color").toggleClass("hover");
  $(".login").toggleClass("hover");
});

$(".cart").hover(function() {
  $(".cart-icon").toggleClass("hover");
  $(".cart-icon-color").toggleClass("hover");
  $(".cart").toggleClass("hover");
});

// Mobile search
$(".search-icon-mobile").on("click", function() {
  $("#input-mobile").toggleClass("clicked");
  $("#input-mobile").trigger("click");
  $("#input-mobile").focus();
});
