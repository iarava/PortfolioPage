var slideIndex;

window.onload = function () {
    init();
}

function init() {
    var i;
    var countPortfolios = document.getElementsByClassName("portfolio-content").length; 
    slideIndex = new Int8Array(countPortfolios);
    for(i = 1; i <= countPortfolios; i++){
        slideIndex[i-1] = 1;
        console.log(slideIndex);  
        showSlides(slideIndex[i-1], i);
    }  
}

function plusSlides(n, portfolioNr) {
  showSlides(slideIndex[portfolioNr-1] += n, portfolioNr);
}

function currentSlide(n, portfolioNr) {
  showSlides(slideIndex[portfolioNr-1] = n, portfolioNr);
}

function showSlides(n, portfolioNr) {
  var i;
  var portfolioId = "portfolio_" + portfolioNr;
  var slides = document.getElementById(portfolioId).getElementsByClassName("mySlides");
  var dots = document.getElementById(portfolioId).getElementsByClassName("dot");
  if (n > slides.length) {slideIndex[portfolioNr-1] = 1}    
  if (n < 1) {slideIndex[portfolioNr-1] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  var index = slideIndex[portfolioNr-1];
  slides[index-1].style.display = "block";  
  if (n > slides.length) dots[index-1].className += " active";
}