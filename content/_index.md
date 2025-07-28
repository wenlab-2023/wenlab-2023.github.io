---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <div class="slideshow-container" style="width: 100%; position: relative; margin: 0;">
          <!-- Slides -->
          <div class="slide fade" style="display: block;">
            <img src="/media/h1.jpg" style="width: 100%; height: 70vh; object-fit: cover;">
          </div>
          <div class="slide fade" style="display: none;">
            <img src="/media/h2.jpg" style="width: 100%; height: 70vh; object-fit: cover;">
          </div>
          <div class="slide fade" style="display: none;">
            <img src="/media/h3.jpg" style="width: 100%; height: 70vh; object-fit: cover;">
          </div>

          <!-- Navigation arrows -->
          <a class="prev" onclick="changeSlide(-1)" style="cursor: pointer; position: absolute; top: 50%; width: auto; padding: 16px; margin-top: -22px; color: white; font-weight: bold; font-size: 18px; transition: 0.6s ease; border-radius: 0 3px 3px 0; user-select: none; background-color: rgba(0,0,0,0.8); left: 0;">&#10094;</a>
          <a class="next" onclick="changeSlide(1)" style="cursor: pointer; position: absolute; top: 50%; width: auto; padding: 16px; margin-top: -22px; color: white; font-weight: bold; font-size: 18px; transition: 0.6s ease; border-radius: 3px 0 0 3px; user-select: none; background-color: rgba(0,0,0,0.8); right: 0;">&#10095;</a>

          <!-- Dots -->
          <div style="text-align: center; position: absolute; bottom: 20px; width: 100%;">
            <span class="dot" onclick="currentSlide(1)" style="cursor: pointer; height: 15px; width: 15px; margin: 0 2px; background-color: #717171; border-radius: 50%; display: inline-block; transition: background-color 0.6s ease;"></span>
            <span class="dot" onclick="currentSlide(2)" style="cursor: pointer; height: 15px; width: 15px; margin: 0 2px; background-color: #bbb; border-radius: 50%; display: inline-block; transition: background-color 0.6s ease;"></span>
            <span class="dot" onclick="currentSlide(3)" style="cursor: pointer; height: 15px; width: 15px; margin: 0 2px; background-color: #bbb; border-radius: 50%; display: inline-block; transition: background-color 0.6s ease;"></span>
          </div>
        </div>
        <script>
        let slideIndex = 1;
        showSlides(slideIndex);
        function changeSlide(n) { showSlides(slideIndex += n); }
        function currentSlide(n) { showSlides(slideIndex = n); }
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("slide");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
          for (i = 0; i < dots.length; i++) { dots[i].style.backgroundColor = "#bbb"; }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].style.backgroundColor = "#717171";
        }
        setInterval(function() { changeSlide(1); }, 4000);
        </script>
        <style>
        .slideshow-container { width: 100%; margin: 0; box-shadow: none; border-radius: 0; overflow: hidden; }
        .slide { position: relative; }
        .slide img { width: 100%; height: 70vh; object-fit: cover; }
        .prev:hover, .next:hover { background-color: rgba(0,0,0,0.9) !important; }
        .dot:hover { background-color: #717171 !important; }
        .fade { animation-name: fade; animation-duration: 1.5s; }
        @keyframes fade { from {opacity: .4} to {opacity: 1} }
        </style>
    design:
      spacing:
        padding: ["0px", "0", "0px", "0"]
      css_class: full-width-slideshow

  - block: markdown
    content:
      title: "<u>W</u>earable <u>E</u>ngineering and <u>N</u>eural Interface Laboratory<br>(WEN Lab)"
      subtitle: ""
      text: |
        The **W**earable **E**ngineering and **N**eural Interface Laboratory (WEN Lab) at University of Central Florida has been a center of excellence for rehabilitation, wearable engineering, robotics and neural machine interface since its founding in 2023.
    design:
      columns: '1'
      css_class: lab-intro

  - block: markdown
    content:
      title: Our Mission
      subtitle: ""
      text: |
        [Your mission text will go here]
    design:
      columns: '1'
      css_class: mission-section
---
