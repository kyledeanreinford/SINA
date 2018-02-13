
// Main background images for slideshow
const imgArray = ["./images/slideshow_images/optimized/SINA_slideshow-01.jpg","./images/slideshow_images/optimized/SINA_slideshow-02.jpg","./images/slideshow_images/optimized/SINA_slideshow-03.jpg","./images/slideshow_images/optimized/SINA_slideshow-04.jpg","./images/slideshow_images/optimized/SINA_slideshow-05.jpg","./images/slideshow_images/optimized/SINA_slideshow-06.jpg" ]

// Slideshow function
// function carousel() {
//     let index = 0;
//     setInterval(function() {
//     let headlineImage = document.getElementById('headlineImage');
//     headlineImage.src = imageArray[index];
//     index += 1;
//     if (index === imageArray.length) {
//       index = 0;
//     }
//   }, 5000);
// }

var index = 0;
const imgDuration = 7000;

function carousel() {
    if (screen.availWidth > 920) {
    document.getElementById('headlineImage').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('headlineImage').src = imgArray[index];
        document.getElementById('headlineImage').className = "";
    }, 1000);
    index += 1;
    if (index == imgArray.length) {
      index = 0;
    }
    setTimeout(carousel, imgDuration);
  } else {
    document.getElementById('headlineImage').src = imgArray[1];
  }
}

document.onload = carousel();

// Change header size, opacity on scroll
document.body.onscroll = function stickyHeader() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('header').className = "headerOnScroll";
  } else {
    document.getElementById('header').className = "header";
  };
}
