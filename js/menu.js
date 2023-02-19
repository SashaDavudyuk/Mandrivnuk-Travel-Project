var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

$(document).on("scroll", function () {
    if($(window).scrollTop() === 0)
      $("header").removeClass("fixed-header");
    else
      $("header").attr("class", "fixed-header");
  });


// Progress bar
const  progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let per = windowScroll / windowHeight * 100;

  progress.style.width = per + '%';
}

// Preloader
document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('loader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
			setTimeout(function() {
				preloader.classList.add('hide');
			}, 500);
		}
	}, 1500);
}

//Scroll
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

//Popup
$(document).ready(function(){
  $('.popup-btn').click(function(){ 
    var popupBlock = $('#'+$(this).data('popup'));
    popupBlock.addClass('active')
      .find('.fade-out').click(function(){
        popupBlock.css('opacity','0').find('.popup-content').css('margin-top','350px');        
        setTimeout(function(){
          $('.popup').removeClass('active');
          popupBlock.css('opacity','').find('.popup-content').css('margin-top','');
        }, 600);
      });
 });
});

//Message area
var maxCount = 1000;
var redCount = 3;
$("#count").text(maxCount);
function getCount() {
  var count = maxCount - $("#seo-title").val().length;
  $("#count").text(count);
  if (count <= redCount) {
    $(".inform-text").addClass("red");
  } else if (count > 0 && $(".inform-text").hasClass("red")) {
    $(".inform-text").removeClass("red");
    $("#submit-button").removeClass("disabled");
  }
  if (count <= 0) {
    $("#submit-button").addClass("disabled");
    $("#submit-button").text("Недоступно");
  } else if (count > 0 &&  $("#submit-button").hasClass("disabled")) {
    $("#submit-button").removeClass("disabled");
    $("#submit-button").text("Отправить");
  }
}

function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } 
}

//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//Scroll to id
function slowScroll(id) {
  $('html, body').animate({
  scrollTop: $(id).offset().top -100
  }, 500);
}

//tours menu
function openMenu() {
  document.getElementById("sidebar").classList.toggle('active');
} 