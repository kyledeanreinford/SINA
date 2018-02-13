
// Main background images for slideshow
const imageArray = ["../images/DSC02303.jpg", "../images/DSC02308.jpg", "../images/DSC02312.jpg", "../images/DSC02315.jpg", "../images/DSC02317.jpg", "../images/DSC02322.jpg",
"../images/DSC02328.jpg" ]

// Slideshow function
function carousel(array) {
  for (var i = 0; i < array.length; i += 1) {
    let headlineImage = document.getElementById('headlineImage');
    headlineImage.setAttribute("src", array[i]);

    document.body.appendChild(x)
  }
}

// Change header size, opacity on scroll
document.body.onscroll = function stickyHeader() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('header').className = "headerOnScroll";
  } else {
    document.getElementById('header').className = "header";
  };
}
