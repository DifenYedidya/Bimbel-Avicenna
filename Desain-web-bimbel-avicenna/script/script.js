//shrinking header
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("pageHeader").style.padding = "10px 20px";
  } else {
    document.getElementById("pageHeader").style.padding = "20px 100px";
  }
}
