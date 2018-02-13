
// Main background images for slideshow
const imageArray = ["./images/slideshow_images/optimized/SINA_slideshow-01.jpg","./images/slideshow_images/optimized/SINA_slideshow-02.jpg","./images/slideshow_images/optimized/SINA_slideshow-03.jpg","./images/slideshow_images/optimized/SINA_slideshow-04.jpg","./images/slideshow_images/optimized/SINA_slideshow-05.jpg","./images/slideshow_images/optimized/SINA_slideshow-06.jpg" ]

// Slideshow function


function carousel() {
    let index = 0;
    setInterval(function() {
    let headlineImage = document.getElementById('headlineImage');
    headlineImage.className += "fadeOut";
    headlineImage.src = imageArray[index];
    headlineImage.className = "";
    index += 1;
    if (index === imageArray.length) {
      index = 0;
    }
}, 5000);
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
