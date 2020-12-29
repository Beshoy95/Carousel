var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    currentIndex = imgs.indexOf(e.target);
    var imgSrc = e.target.getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    lightBoxContainer.style.display = "flex";
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }
  var imgSrc = imgs[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  var imgSrc = imgs[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function closeSlide() {
  lightBoxContainer.style.display = "none";
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
closeBtn.addEventListener("click", closeSlide);

document.addEventListener("keydown", function (e) {
  if (e.code == "ArrowRight") {
    nextSlide();
  } else if (e.code == "ArrowLeft") {
    prevSlide();
  } else if (e.code == "Escape") {
    closeSlide();
  }
});
