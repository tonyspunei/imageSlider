(function () {
  let backgrondImg = document.getElementById("image");
  let buttons = document.querySelectorAll(".btn");
  let buttonLeft = document.getElementById("btn-left");
  let buttonRight = document.getElementById("btn-right");
  let images = ["img1.jpg", "img2.jpg", "img3.jpg"];

  buttonRight.addEventListener("click", swipe());
})();
