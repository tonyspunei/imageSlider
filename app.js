(function () {
  let backgrondImg = document.getElementById("image");
  let buttons = document.querySelectorAll(".btn");
  let images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
  ];
  let index = 0;

  backgrondImg.style.backgroundImage = `url(/img/${images[index]})`;

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("btn-left")) {
        index--;
      }
      backgrondImg.style.backgroundImage = `url(./img/${images[index]})`;

      if (button.classList.contains("btn-right")) {
        index++;
        if (index > images.length - 1 || index < 0) {
          index = 0;
        }
        backgrondImg.style.backgroundImage = `url(./img/${images[index]})`;
      }
    });
  });
})();
