$(document).on("click", ".scroll", function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute("data-target");
    $("html, body").animate({scrollTop: $(target).offset().top},500);
  });
  
  $(window).scroll(function() {
    var scrolledDistance = $(window).scrollTop();
    var windowHeight = $(window).height();
    var amount = 1 - scrolledDistance / windowHeight;
    $(".scroll, .banner-title").css("opacity", amount);
    $(".banner-title").css("margin-top", (-1 * (amount - 1)) * windowHeight);
});