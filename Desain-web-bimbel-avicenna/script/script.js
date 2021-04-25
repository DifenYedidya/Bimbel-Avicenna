//shrinking header
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("pageHeader").style.padding = "10px 20px";
  } else {
    document.getElementById("pageHeader").style.padding = "20px 100px";
  }
}

//show clicked content with Jquery
var $content = $(".menuContent");

function showContent(selector) {
  $content.hide();
  $(selector).show();
}

$(".menu").on("click", ".menuBtn", function (e) {
  showContent(e.currentTarget.hash);
  e.preventDefault();
});

showContent("#home");

