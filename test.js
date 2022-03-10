<!DOCTYPE html> 
 
<html> 
<meta name="viewport" content="width=device-width, initial-scale=1"> 
 
<style> 
* {box-sizing:border-box} 
body {font-family: Verdana,sans-serif;margin:0} 
.slidephoto {display:none} 
 
/* Slideshow container */ 
.slidepics { 
  max-width: 1000px; 
  position: relative; 
  margin: auto; 
} 
 
/* Next & previous buttons */ 
.prev, .next { 
  cursor: pointer; 
  position: absolute; 
  top: 50%; 
  width: auto; 
  padding: 16px; 
  margin-top: -22px; 
  color: white; 
  font-weight: bold; 
  font-size: 18px; 
  transition: 0.6s ease; 
  border-radius: 0 3px 3px 0; 
} 
 
/* Position the "next button" to the right */ 
.next { 
  right: 0; 
  border-radius: 3px 0 0 3px; 
} 
 
/* On hover, add a black background color with a little bit see-through */ 
.prev:not(hover), .next:not(hover) { 
  background-color: rgb(255,198,153); 
} 
 
/* Caption text */ 
.text { 
  color: #00000; 
  font-size: 50px; 
  padding: 8px 12px; 
  position: absolute; 
  bottom: 8px; 
  width: 100%; 
  text-align: center; 
} 
 
/* Number text (1/3 etc) */ 
.numbertext { 
  color: #00000; 
  font-size: 30px; 
  padding: 8px 12px; 
  position: absolute; 
  top: 0; 
} 
 
/* The dots/bullets/indicators */ 
.dot { 
  cursor:pointer; 
  height: 13px; 
  width: 13px; 
  margin: 0 2px; 
  background-color: #bbb; 
  border-radius: 50%; 
  display: inline-block; 
  transition: background-color 0.6s ease; 
} 
 
.active, .dot:hover { 
  background-color: #717171; 
} 
 
/* Fading animation */ 
.fade { 
  -webkit-animation-name: fade; 
  -webkit-animation-duration: 1.5s; 
  animation-name: fade; 
  animation-duration: 1.5s; 
} 
 
@-webkit-keyframes fade { 
  from {opacity: .4} 
  to {opacity: 1} 
} 
 
@keyframes fade { 
  from {opacity: .4} 
  to {opacity: 1} 
} 
 
/* On smaller screens, decrease text size */ 
@media only screen and (max-width: 300px) { 
  .prev, .next,.text {font-size: 11px} 
} 
</style> 
<body> 
 
<div class="slidpics"> 
 
<div class="slidephoto fade"> 
  <div class="numbertext">1 / 4</div> 
  <center> <img src="IMG-2636.JPG" style="width:50%"> </center>
  <div class="text"> Take </div> 
</div> 
 
<div class="slidephoto fade"> 
  <div class="numbertext">2 / 4</div> 
  <center> <img src="lp-image.jpg" style="width:50%"> </center>
  <div class="text"> Me </div> 
</div> 
 
<div class="slidephoto fade"> 
  <div class="numbertext">3 / 4</div> 
  <center> <img src="IMG-2009.JPG" style="width:50%"> </center>
  <div class="text"> Back </div> 
</div> 

  <div class="slidephoto fade"> 
  <div class="numbertext">4 / 4</div> 
  <center> <img src="giphy.gif" style="width:50%"> </center>
  <div class="text"> Im Joking i'f you're joking... </div> 
</div> 
  
<a class="prev" onclick="plusSlides(-1)"> < </a> 
<a class="next" onclick="plusSlides(1)"> > </a> 
 
</div> 
<br> 
 
<div style="text-align:center"> 
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div> 
 
<script> 
var slideIndex = 1; 
showSlides(slideIndex); 
 
function plusSlides(n) { 
  showSlides(slideIndex += n); 
} 
 
function currentSlide(n) { 
  showSlides(slideIndex = n); 
} 
 
function showSlides(n) { 
  var i; 
  var slides = document.getElementsByClassName("slidephoto"); 
  var dots = document.getElementsByClassName("dot"); 
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) { 
      slides[i].style.display = "none"; 
  } 
  for (i = 0; i < dots.length; i++) { 
      dots[i].className = dots[i].className.replace(" active", ""); 
  } 
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active"; 
} 
</script> 
</body>  
</html>
